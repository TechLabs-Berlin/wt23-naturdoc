# wt23-naturdoc

# installation

cd backend
npm install

# setup mongo

whitelist your IP on Mongo Atlas DB
connect via 'mongodb+srv://<username>:<password>@naturdoc.aj9zhtw.mongodb.net/<db_name>?retryWrites=true&w=majority';

# setup environmental variables

create a .env file with variables:
- MONGO_URI=mongodb+srv://naturdoc:WhYJmBoDdO3tZ89Z@naturdoc.aj9zhtw.mongodb.net/?retryWrites=true&w=majority
- MONGO_USER=<username>
- MONGO_PASSWORD=<password>

# run 

node app.js
