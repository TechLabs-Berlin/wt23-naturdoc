from typing import List, Union
import pymongo
from dotenv import load_dotenv
import os 
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# https://fastapi.tiangolo.com/tutorial/body/
class Item(BaseModel):
    name: str
    description: Union[str, None] = None # becomes optional
    price: float
    tax: Union[float, None] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

# if get request: all information needs to be in the URL
@app.get("/test/{id}")
async def read_item(id: int, q: Union[str, None] = None):
    return {"id": id, "q": q}

# post: information in header/body
@app.post("/items/")
async def create_item(item: Item): # declaring it as a required parameter
    return item

# actual approach for Naturedoc:

# approach A:

class Symptom(BaseModel):
    name: str

class Query(BaseModel):
    symptoms: List[Symptom]

# ex. request body to /remedies/query:

# {
#     "symptoms": [
#       {"name": "Headache"},
#       {"name": "Nausea"}
#     ]
# }

# approach B:

class Query(BaseModel):
    symptoms: List[str]

# ex. request body to /remedies/query:

# {
#     "symptoms": [
#       "Headache",
#       "Nausea"
#     ]
# }

@app.post("/remedies/query")
async def query_remedies(symptoms: Query): # declaring it as a required parameter
    print(symptoms)
    client = get_client()
    remedies = await get_remedy(client, symptoms)
    print(remedies)
    return symptoms

# connecting to MongoDB Atlas:

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

# client = pymongo.MongoClient(MONGO_URI)
# db = client.naturdoc
# collection = db.remedies

def get_client():
    client = pymongo.MongoClient(MONGO_URI)
    return client

async def get_remedy(client: pymongo.MongoClient, symptoms: list):
    db = client.naturdoc
    collection = db.remedies
    remedies = list()
    for symptom in symptoms:
        remedy = collection.find_one({ "ACTIVITY": { "$in": [ f"/{symptom}/i" ] } })
        remedies.append(remedy)
        print(remedy)
    return remedies

# client.close()

# run the server in bash with:
# uvicorn main:app --reload