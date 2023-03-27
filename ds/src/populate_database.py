import pymongo
import json 
import os # dotenv requires os to access the actual environment variables
from dotenv import load_dotenv

print("pymongo V.", pymongo.version)
print("Connecting to database...")

# dotenv variables (alternative: dict with dotenv_values()):
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

def update_remedies_collection():
    client = pymongo.MongoClient(MONGO_URI)
    db = client.naturdoc
    collection = db.remedies

    with open(r"../output/remedies.json") as f:
        file_data = json.load(f)

    collection.insert_many(file_data)
    print("Updated remedies collection.")

    client.close()

def update_symptoms_collection():
    client = pymongo.MongoClient(MONGO_URI)
    db = client.naturdoc
    collection = db.symptoms

    with open(r"../output/symptoms.json") as f:
        file_data = json.load(f)

    collection.insert_many(file_data)
    print("Updated symptoms collection.")

    client.close()

while True:
    print("Update remedies (1) or symptoms (2)? Exit with q:")
    choice = input()
    if choice == "1":
        update_remedies_collection()
        break
    elif choice == "2":
        update_symptoms_collection()
        break
    elif choice == "q":
        break
    else:
        print("Invalid input")
        continue