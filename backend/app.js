const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connect } = require('./database/database');

const { remedies, auth, user, recommendations, symptoms } = require('./routes');

const PORT = 7000;
const app = express();
dotenv.config();


app.use('/remedies', remedies);
app.use('', auth);
app.use('/user', user);
app.use('/', recommendations);
app.use('/', symptoms);

//connect to DB
connect().then(async function seed() {
    console.log('Successfully connected to Database');
});

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));



app.listen(PORT, () => {
    console.log("serving on port 7000")
})