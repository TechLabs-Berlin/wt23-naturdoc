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

class Query(BaseModel):
    symptomsUser: List[str]

@app.post("/remedies/query")
async def query_remedies(q: Query): # declaring it as a required parameter
    symptoms_user = q.symptomsUser
    print("symptoms received")
    remedies = get_remedy_recommendation(symptoms_user, 10)
    print("recs received")
    return remedies


# run the server in bash with:
# uvicorn main:app --reload