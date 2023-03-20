from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Union

from fastapi.middleware.cors import CORSMiddleware
from recommender import get_remedy_recommendation

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# information about FastAPI setup: 

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
async def query_remedies(q: Query): # declaring it as a required parameter
    symptoms = q.symptoms
    print("symptoms received")
    remedies = get_remedy_recommendation(symptoms, 10)
    print("recs received")
    return remedies


# run the server in bash with:
# uvicorn main:app --reload