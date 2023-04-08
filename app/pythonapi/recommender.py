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

    with open("./data/symptom_matches.json", 'r') as f:
        symptom_matches = json.load(f)

    activities = list()

    for symptom in symptoms:
        print(f"For symptom '{symptom}', found the following activities:")
        try:
            matches = symptom_matches[symptom]
            activities.extend(matches)
            print(*matches)
        except:
            print(f"Could not find matches for '{symptom}'")

    remedies = dict()

    for activity in activities:
        print("Querying collection for...", activity)
        results = list()
        try:
            curs = collection.find({ "medicinalUses": { '$regex' : activity, '$options' : 'i' }  })
            for remedy in curs:
                results.append(remedy)
        except Exception as e:
            print(e)
        if results:
            remedies[activity] = results

    client.close()

    has_medical = dict()
    has_no_medical = dict()

    for key, herbs in remedies.items():
        top_results = list()
        incomplete_results = list()
        print("Activity:", key)
        print("Number of remedies found:", len(herbs))
        for herb in herbs:
            activity_matches = list()
            for activity in activities:
                if activity in herb["medicinalUses"]:
                    activity_matches.append(activity)
            if herb["treatmentClinical"] or herb["treatmentTraditional"] or herb["treatmentFolk"]:
                herb["activity_matches"] = activity_matches
                top_results.append(herb)
            else:
                herb["activity_matches"] = activity_matches
                incomplete_results.append(herb)
        has_medical[key] = top_results
        has_no_medical[key] = incomplete_results

    match_all = list()
    match_partial = list()
    match_one = list()

    for key, herbs in has_medical.items():
        print("Top results for activity:", key)
        print("Number of remedies with instructions found:", len(herbs))
        for herb in herbs:
            matches = herb["activity_matches"]
            if matches == activities and herb not in match_all:
                match_all.append(herb)
            elif len(matches) > 1 and len(matches) < len(activities) and herb not in match_partial:
                match_partial.append(herb)
            elif len(matches) == 1 and herb not in match_one:
                match_one.append(herb)

    incomplete_match_all = list()
    incomplete_match_partial = list()
    incomplete_match_one = list()

    for key, herbs in has_no_medical.items():
        print("Other results for activity:", key)
        print("Number of remedies without instructions found:", len(herbs))
        for herb in herbs:
            matches = herb["activity_matches"]
            if matches == activities and herb not in incomplete_match_all:
                incomplete_match_all.append(herb)
            elif len(matches) > 1 and len(matches) < len(activities) and herb not in incomplete_match_partial:
                incomplete_match_partial.append(herb)
            elif len(matches) == 1 and herb not in incomplete_match_one:
                incomplete_match_one.append(herb)

    match_partial.sort(key = lambda x: len(x['activity_matches']), reverse=True)
    incomplete_match_partial.sort(key = lambda x: len(x['activity_matches']), reverse=True)

    print("match_all:", len(match_all))
    print("match_partial:", len(match_partial))
    print("match_one:", len(match_one))

    n_returns = 0
    i_all = 0
    i_partial = 0
    i_one = 0
    incomplete_i_all = 0
    incomplete_i_partial = 0
    incomplete_i_one = 0

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

        elif incomplete_i_all < len(incomplete_match_all):
            if "incomplete_match_all" not in response.keys():
                response["incomplete_match_all"] = [incomplete_match_all[incomplete_i_all]]
            else:
                response["incomplete_match_all"] = [*response.get("incomplete_match_all"), incomplete_match_all[incomplete_i_all]]
            incomplete_i_all += 1
        elif incomplete_i_partial < len(incomplete_match_partial):
            if "incomplete_match_partial" not in response.keys():
                response["incomplete_match_partial"] = [incomplete_match_partial[incomplete_i_partial]]
            else:
                response["incomplete_match_partial"] = [*response.get("incomplete_match_partial"), incomplete_match_partial[incomplete_i_partial]]
            incomplete_i_partial += 1
        elif incomplete_i_one < len(incomplete_match_one):
            if "incomplete_match_one" not in response.keys():
                response["incomplete_match_one"] = [incomplete_match_one[incomplete_i_one]]
            else:
                response["incomplete_match_one"] = [*response.get("incomplete_match_one"), incomplete_match_one[incomplete_i_one]]
            incomplete_i_one += 1  
    
    response_with_warnings = list() 
    severe_symptoms = ["Tumor", "Kidney failure", "Stroke", "Bleeding", "Bone fracture", "Bone tumor", "Heart arrhythmia",\
                       "Hepatotoxicity", "Self-harm", "Suicidal ideation"]

    for key, remedies in response.items():
        for remedy in remedies:
            json_response = dict()
            json_response["_id"] = f"{remedy['_id']}"
            json_response["ratingAverage"] = remedy["ratingAverage"]
            json_response["totalNumberofRatings"] = remedy["totalNumberofRatings"]
            json_response["remedyName"] = remedy["remedyName"]
            if remedy["commonNames"]:
                json_response["commonNames"] = remedy["commonNames"].split(",")
            else:
                json_response["commonNames"] = remedy["commonNames"]
            json_response["medicinalUses"] = remedy["medicinalUses"].split(",")
            json_response["treatmentClinical"] = remedy["treatmentClinical"]
            json_response["treatmentTraditional"] = remedy["treatmentTraditional"]
            json_response["treatmentFolk"] = remedy["treatmentFolk"]
            json_response["contraindication"] = remedy["contraindication"]
            json_response["warnings"] = remedy["warnings"]
            json_response["adverseEffects"] = remedy["adverseEffects"]
            json_response["posology"] = remedy["posology"]
            json_response["symptomsMatched"] = list()  
            for symptom in symptoms:
                try:
                    if bool(set(symptom_matches[symptom]) & set(remedy["activity_matches"])):
                    # set(symptom_matches[symptom]).isdisjoint(remedy["activity_matches"]):
                    # any(activity in symptom_matches[symptom] for activity in remedy["activity_matches"]):
                        json_response["symptomsMatched"].extend([symptom])
                except:
                    pass
            if len(symptoms) == len (json_response["symptomsMatched"]):
                json_response["fullMatch"] = True
            else:
                json_response["fullMatch"] = False
            json_response["doctorAlert"] = False
            for symptom in json_response["symptomsMatched"]:
                if symptom in severe_symptoms:
                    json_response["doctorAlert"] = True
            json_response["iconReference"] = None
            response_with_warnings.append(json_response)

    output_json = json.loads(json_util.dumps(response_with_warnings))
    return output_json