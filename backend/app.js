const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const LocalStrategy = require('passport-local');
const dotenv = require('dotenv');

const { symptomsModel } = require('./models');

const catchAsynch = require('./utilities/catchAsynch');
const { checkLogin } = require('./middleware');
const { connect } = require('./database/database');

const { remedies, auth, user } = require('./routes');



const PORT = 7000;
const app = express();
dotenv.config();


app.use('/remedies', remedies);
app.use('', auth);
app.use('/user', user);

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

//get remedy recommendation
app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
    const body = req.query.symptomsUser;
    console.log(req.query.symptomsUser)
    const responseDS = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/remedies/query',
        headers: {
            'Content-Type': 'application/json'
        },
        data:
        {
            "symptomsUser": body
        }
    }
    )
    const response = responseDS.data.map(remedyItem => {
        return {
            remedyName: remedyItem.remedyName,
            symptomsMatched: remedyItem.symptomsMatched,
            ratingAverage: remedyItem.ratingAverage,
            _id: remedyItem._id,
            medicinalUses: remedyItem.medicinalUses,
            totalNumberofRatings: remedyItem.totalNumberofRatings,
            iconReference: remedyItem.iconReference
        }
    })
    return res.status(200).send(response);
}));



//result list per user !!

//list all symptoms
app.get('/getSymptoms', catchAsynch(async (req, res) => {
    const { symptom } = req.params;
    const symptomName = await symptomsModel.find({})
    // console.log(symptomName)
    const response = symptomName.map(symptomItem => {
        return {
            symptomName: symptomItem.symptomName,
            _id: symptomItem.id
        }
    })
    return res.status(200).send(response);
}));




app.listen(PORT, () => {
    console.log("serving on port 7000")
})