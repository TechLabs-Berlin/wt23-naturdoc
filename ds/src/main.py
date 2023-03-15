from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Union[str, None] = None # becomes optional
    price: float
    tax: Union[float, None] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/remedies/query")
async def read_item(q: Union[str, None] = None):
    return {
        "taxonomicName": "Bla", 
        "userSymptoms": q
        }

@app.post("/items/")
async def create_item(item: Item): # declaring it as a required parameter
    return item

# run the server in bash with 
# uvicorn main:app --reload