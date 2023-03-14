import pymongo
import json 
import os # dotenv requires os to access the actual environment variables
from dotenv import load_dotenv

print("pymongo V.", pymongo.version)
print("Connecting to database...")

# dotenv variables (alternative: dict with dotenv_values()):
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = pymongo.MongoClient(MONGO_URI)
db = client.naturdoc
collection = db.remedies
requesting = []

with open(r"../output/remedies.json") as f:

    file_data = json.load(f)

collection.insert_many(file_data)

client.close()