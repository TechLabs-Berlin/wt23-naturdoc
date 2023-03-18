import pymongo
import os 
import json
from bson import json_util
from dotenv import load_dotenv

# connecting to MongoDB Atlas:

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

def get_remedy_recommendation(symptoms: list, n_herbs: int):
    print("pymongo V.", pymongo.version)
    print("Connecting to database...")

    client = pymongo.MongoClient(MONGO_URI)
    db = client.naturdoc
    collection = db.remedies

    remedies = dict()

    for symptom in symptoms:
        print("Querying collection for...", symptom)
        results = list()
        try:
            curs = collection.find({ "ACTIVITY": { '$regex' : symptom, '$options' : 'i' }  })
            for remedy in curs:
                results.append(remedy)
        except Exception as e:
            print(e)
        if results:
            remedies[symptom] = results

    client.close()

    has_medical = dict()

    for key, herbs in remedies.items():
        top_results = list()
        print("Symptom:", key)
        print("Number of remedies found:", len(herbs))
        for herb in herbs:
            symptom_matches = list()
            for symptom in symptoms:
                if symptom in herb["ACTIVITY"]:
                    symptom_matches.append(symptom)
            if herb["CLINICAL"] or herb["TRADITIONAL"] or herb["FOLK"]:
                herb["symptom_matches"] = symptom_matches
                top_results.append(herb)
        has_medical[key] = top_results

    match_all = list()
    match_partial = list()
    match_one = list()

    for key, herbs in has_medical.items():
        print("Top results for symptom:", key)
        print("Number of remedies with instructions found:", len(herbs))
        for herb in herbs:
            matches = herb["symptom_matches"]
            if matches == symptoms and herb not in match_all:
                match_all.append(herb)
            elif len(matches) > 1 and len(matches) < len(symptoms) and herb not in match_partial:
                match_partial.append(herb)
            elif len(matches) == 1 and herb not in match_one:
                match_one.append(herb)

    match_partial.sort(key = lambda x: len(x['symptom_matches']), reverse=True)

    print("match_all:", len(match_all))
    print("match_partial:", len(match_partial))
    print("match_one:", len(match_one))

    n_returns = 0
    i_all = 0
    i_partial = 0
    i_one = 0

    response = dict()

    while n_returns < n_herbs:
        n_returns += 1
        if i_all < len(match_all):
            if "match_all" not in response.keys():
                response["match_all"] = [match_all[i_all]]
            else:
                response["match_all"] = [*response.get("match_all"), match_all[i_all]]
            i_all += 1
        elif i_partial < len(match_partial):
            if "match_partial" not in response.keys():
                response["match_partial"] = [match_partial[i_partial]]
            else:
                response["match_partial"] = [*response.get("match_partial"), match_partial[i_partial]]
            i_partial += 1
        elif i_one < len(match_one):
            if "match_one" not in response.keys():
                response["match_one"] = [match_one[i_one]]
            else:
                response["match_one"] = [*response.get("match_one"), match_one[i_one]]
            i_one += 1
    
    actual_response = list() # final.finalfinalname
    severe_symptoms = ["Cancer", "Malaria", "Abortive", "Abortifacient", "Antidote(Black Widow)", "Antidote(Scorpion)", "Bite(Snake)"]

    for key, remedies in response.items():
        for remedy in remedies:
            json_response = dict()
            json_response["mongoId"] = f"{remedy['_id']}"
            json_response["rating"] = None
            json_response["taxonomicName"] = remedy["TAXON"]
            json_response["commonNames"] = remedy["CNAME"].split(",")
            json_response["medicinalUses"] = remedy["ACTIVITY"].split(",")
            json_response["treatmentClinical"] = remedy["CLINICAL"]
            json_response["treatmentTraditional"] = remedy["TRADITIONAL"]
            json_response["treatmentFolk"] = remedy["FOLK"]
            json_response["contraindication"] = remedy["CONTRAINDICATION"]
            json_response["warnings"] = remedy["WARNING"]
            json_response["adverseEffects"] = remedy["ADVERSE"]
            json_response["posology"] = remedy["POSOLOGY"]
            if key == "match_all":
                json_response["fullMatch"] = True
            else:
                json_response["fullMatch"] = False
            json_response["symptomsMatched"] = remedy["symptom_matches"]      
            json_response["doctorAlert"] = False
            for symptom in remedy["symptom_matches"]:
                if symptom in severe_symptoms:
                    json_response["doctorAlert"] = True
            json_response["iconReference"] = None
            actual_response.append(json_response)
    final_actual_response = json.loads(json_util.dumps(actual_response))
    return final_actual_response

# example response:
# [
#   {
#     "_id": ObjectId('412fl3b0q38f9327cab7a85db'),
#     "rating": float,
#     "taxonomicName": "Scientific name",
#     "commonNames": [ # could also just be a comma-separated string
#         "A",
#         "list",
#         "of",
#         "common",
#         "names"
#     ],
#     "medicinalUses": [ # could also just be a comma-separated string
#         "A",
#         "list",
#         "of",
#         "all",
#         "symptoms",
#         "treated",
#         "by",
#         "the",
#         "remedy",
#         "as",
#         "per",
#         "the",
#         "Duke",
#         "dataset"
#     ],
#     "treatmentClinical": 
#         "If available, a text describing clinically proven treatments",
#     "treatmentTraditional": 
#         "If available, a text describing treatments from traditional systems of medicine",
#     "treatmentFolk": 
#         "If available, a text describing folk treatments",
#     "contraindication": 
#         "If available, a text describing general allergies and precautions",
#     "warnings": 
#         "If available, a text describing warnings",
#     "adverseEffects": 
#         "If available, a text describing allergies etc.",
#     "posology": 
#         "If available, a text describing dosage and dosage types",
#     "fullMatch": bool,
#     "symptomsMatched": [
#         "Headache",
#         "Diarrhea",
#         "Nausea"
#     ],
#     "doctorAlert": bool, # or different levels of severity
#     "iconReference": "Name of icon to be used" # only if we have icons
#   } 
# ]

# [
#   {
#     "remedy": {
#         "_uid": ObjectId('412fl3b0q38f9327cab7a85db'),
#         "rating": float,
#         "taxonomicName": "Scientific name",
#         "commonNames": [ # could also just be a comma-separated string
#             "A",
#             "list",
#             "of",
#             "common",
#             "names"
#         ],
#         "medicinalUses": [ # could also just be a comma-separated string
#             "A",
#             "list",
#             "of",
#             "all",
#             "symptoms",
#             "treated",
#             "by",
#             "the",
#             "remedy",
#             "as",
#             "per",
#             "the",
#             "Duke",
#             "dataset"
#         ],
#         "treatmentClinical": 
#             "If available, a text describing clinically proven treatments",
#         "treatmentTraditional": 
#             "If available, a text describing treatments from traditional systems of medicine",
#         "treatmentFolk": 
#             "If available, a text describing folk treatments",
#         "contraindication": 
#             "If available, a text describing general allergies and precautions",
#         "warnings": 
#             "If available, a text describing warnings",
#         "adverseEffects": 
#             "If available, a text describing allergies etc.",
#         "posology": 
#             "If available, a text describing dosage and dosage types"
#     },
#     "fullMatch": bool,
#     "symptomsMatched": [
#         "Headache",
#         "Diarrhea",
#         "Nausea"
#        ],
#     "doctorAlert": bool, # or different levels of severity
#     "iconReference": "Name of icon to be used" # only if we have icons
#   } 
# ]


# symptoms = ["Diabetes",
#             "Cough",
#             "Fever",
#             "Ache(Tooth)",
#             "Ache(Stomach)",
#             "Ache(Head)",
#             "Cancer"]

# symptoms = ["Cough",
#             "Diabetes",
#             "Cold",
#             "Ache(Stomach)",
#             "Ache(Head)"]

# get_remedy(symptoms, 10)