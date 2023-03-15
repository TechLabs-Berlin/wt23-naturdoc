from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/remedies/query")
async def read_item(q: Union[str, None] = None):
    return {
        "taxonomicName": "Bla", 
        "userSymptoms": q
        }

# run the server in bash with 
# uvicorn main:app --reload