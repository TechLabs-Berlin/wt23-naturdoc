## Prerequisites:

Basic understanding of Node, Express and Mongo DB.

## Tech Stack

The server is running on Node.js [Node.js](https://nodejs.org/en).
Web Application Framework: Express [Express](https://expressjs.com/).

## how to run

1. Navigate to the backend folder:

### `cd backend`

2. Intall dependencies, run:

### `npm install`

3. Set up Mongo:

### `whitelist your IP on Mongo Atlas DB`
### `connect via 'mongodb+srv://<username>:<password>@naturdoc.aj9zhtw.mongodb.net/<db_name>?retryWrites=true&w=majority'`;

## setup environment variables

create a .env file in the /backend folder with these variables:
- MONGO_URI=mongodb+srv://<username>:<password>@naturdoc.aj9zhtw.mongodb.net/naturdoc?retryWrites=true&w=majority
- MONGO_USER=<username>
- MONGO_PASSWORD=<password>

## run 

node app.js

4. API Endpoints
   API Endpoints are located in the folder /routes. You find the functions for these endpoints in the folder /controllers
