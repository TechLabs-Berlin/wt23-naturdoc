const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const Medicals = require('./models/remedies');
const remedyRating = require('./models/ratings');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const cors = require('cors');
const User = require('./models/user');
const Ratings = require('./models/ratings');
const catchAsynch = require('./utilities/catchAsynch');
const { checkLogin } = require('./middleware');
const { connect } = require('./database/database');
const request = require('request');
const axios = require('axios');


connect().then(async function seed() {
    console.log('Successfully connected to Database');
});


//mongoose.connect('mongodb://localhost:27017/naturdoc');

//mongoose.connect('mongodb+srv://naturdoc:WhYJmBoDdO3tZ89Z@naturdoc.aj9zhtw.mongodb.net/?retryWrites=true&w=majority');


//const db = mongoose.connection;
//db.on("error", console.error.bind(console, "connection.error:"))
//db.once("open", () => {
//    console.log("Database connected");
//});


const sessionConfig = {
    secret: 'testing',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));


app.use(express.json());
app.use(session(sessionConfig));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//get remedy recommendation
app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
    const body = req.query.symptomsMatched;
    console.log(req.query.symptomsMatched)
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:8000/remedies/query',
        headers: {
            'Content-Type': 'application/json'
        },
        data:
        {
            "symptomsMatched": body
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
            medicinalUses: remedyItem.medicinalUses,
            commonNames: remedyItem.commonNames,
            ratingAverage: remedyItem.ratingAverage
        }
    })
    return res.status(200).send(mappedData);
}));



//result list per user !!

//list all symptoms
app.get('/getSymptoms', catchAsynch(async (req, res) => {
    const { symptom } = req.params;
    const medicinalUses = await Medicals.find({})
    const response = medicinalUses.map(remedyItem => {
        return {
            medicinalUses: remedyItem.symptom,
        }
    })
    return res.status(200).send(response);
}));

//get remedies
app.get('/remedies', catchAsynch(async (req, res) => {
    const remedies = await Medicals.find({});
    return res.status(200).send(remedies);
}));

//medicals page 
app.get('/remedies/:id', catchAsynch(async (req, res) => {
    const remedies = await Medicals.findById(req.params.id);
    return res.status(200).send(remedies);
}));

//add the rating
app.put('/remedies/:id', catchAsynch(async (req, res) => {
    const ratingId = new mongoose.Types.ObjectId;
    console.log('*******');
    console.log(req.body);

    const { id } = req.params //req.params;
    const { rating } = req.body;
    const userId = "64151b5e70662285f3b36c0e";

    const newRating = await remedyRating.findOneAndUpdate(
        { remedyId: id, userId: userId },
        { ratingValue: rating },
        {
            new: true,
            upsert: true
        }
    );

    const addRatingToUser = await User.findByIdAndUpdate(newRating.userId,
        { ratings: { remedyId: id, ratingValue: rating } },
        {
            new: true,
            upsert: true
        }
    );

    console.log(addRatingToUser);

    const updateRemedy = await Medicals.findByIdAndUpdate(id,
        { ratings: { ratingValue: rating, userId: userId } },
        {
            //new: true,
            // upsert: true
        }
        //{
        //    $push:
        //    {
        //        ratings: { ratingValue: rating, userId: userId }
        //    }
        //},
    );
    return res.status(200).send(newRating);
}));

//users endpoints: 

app.post('/signup', catchAsynch(async (req, res) => {
    try {
        console.log(req);
        const { email, username, password } = req.body;
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Successfully logged in');
            res.send('Successfully signed up');
        })

    }
    catch (e) {
        req.flash('error', e.message);
        res.send(e.message);
    }
}));

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'welcome back');
    res.send('Welcome back')
});

app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', "Successfully logged out!");
        res.send('Successfully logged out');
    });
});

app.listen(7000, () => {
    console.log("serving on port 7000")
})