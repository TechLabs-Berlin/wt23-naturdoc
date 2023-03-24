const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Medicals = require('./models/remedies');
const remedyRating = require('./models/ratings');
const User = require('./models/user');
const Ratings = require('./models/ratings');
const Symptoms = require('./models/symptoms');
const catchAsynch = require('./utilities/catchAsynch');
const { checkLogin } = require('./middleware');
const { connect } = require('./database/database');

const remedies = require('./routes/remedies');
const auth = require('./routes/auth');

const app = express();

app.use('/remedies', remedies);
app.use('', auth);

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


//app.use(express.json());
//app.use(session(sessionConfig));
//app.use(flash());
//app.use((req, res, next) => {
//    res.locals.success = req.flash('success');
//    res.locals.error = req.flash('error');
//    next();
//})
//app.use(passport.initialize())
//app.use(passport.session())
//passport.use(new LocalStrategy(User.authenticate()));

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

//get remedy recommendation
app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
    const body = req.query.symptomsUser;
    console.log(req.query.symptomsUser)
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/remedies/query',
        headers: {
            'Content-Type': 'application/json'
        },
        data:
        {
            "symptomsUser": body
        }
        //{
        //    "symptoms": [
        //        "Cough",
        //        "Fever",
        //        "Ache(Tooth)",
        //        "Cancer",
        //        "Ache(Head)"
        //    ]
        //}
    }
    )

    console.log("getRemedyRecommendation response:", response.data);

    const mappedData = response.data.map(remedyItem => {
        return {
            remedyName: remedyItem.remedyName,
            symptomsMatched: remedyItem.symptomsMatched,
            ratingAverage: remedyItem.ratingAverage,
            _id: remedyItem._id
        }
    })
    return res.status(200).send(mappedData);
}));



//result list per user !!

//list all symptoms
app.get('/getSymptoms', catchAsynch(async (req, res) => {
    const { symptom } = req.params;
    const medicinalUses = await Symptoms.find({})
    console.log(medicinalUses)
    const response = medicinalUses.map(symptomItem => {
        return {
            symptomName: symptomItem.symptomName,
            _id: symptomItem.id
        }
    })
    return res.status(200).send(response);
}));




app.listen(7000, () => {
    console.log("serving on port 7000")
})