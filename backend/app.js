const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const Medicals = require('./models/remedies');
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


//query field to get remedy recommendation
//app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
//    const { symptom } = req.query;
//    const remedies = await Medicals.find({ ACTIVITY: req.query.symptom }) //await get request from DS endpoint
//    console.log(remedies)
//    const response = remedies.map(remedyItem => {
//        return {
//            symptom: remedyItem.ACTIVITY,
//            remedy: remedyItem.TAXON
//        }
//    })
//    return res.status(200).send(response);
//    //} else {
//    //    const remedies = await Medicals.find({})
//    //    return res.status(200).send(response);
//    //}

//}));

app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
    const { symptom } = req.query;
    request({
        method: "GET",
        url: "http://localhost:7000/remedies/query",
        header: {

        },
        body: {
            "ACTIVITY": symptom
        },
        json: true
    }).pipe(res)


    console.log(res)
    //const response = res.map(remedyItem => {
    //    return {
    //        symptom: remedyItem.ACTIVITY,
    //        remedy: remedyItem.TAXON
    //    }
    //})
    //return res.status(200).send(response);
    //} else {
    //    const remedies = await Medicals.find({})
    //    return res.status(200).send(response);
    //}

}));

//result list per user !!

//list all symptoms
app.get('/getSymptoms', catchAsynch(async (req, res) => {
    const { symptom } = req.params;
    const symptoms = await Medicals.find({})
    const response = symptoms.map(remedyItem => {
        return {
            symptom: remedyItem.symptom,
        }
    })
    return res.status(200).send(response);
}));

//medicals page 
app.get('/remedies/:id', catchAsynch(async (req, res) => {
    const remedies = await Medicals.findById(req.params.id);
    return res.status(200).send(remedies);
}));

//add the rating 
//app.put('/remedies/:id', async (req, res) => {
//    const { id } = req.params;
//    console.log(req.body.rating);
//    const medical = await Medicals.findByIdAndUpdate(
//        { _id: id },
//        { rating: req.body.rating }
//    );
//    return res.status(200).send(medical);
//});

//add the rating 
app.put('/remedies/:id', async (req, res) => {
    const commentId = new mongoose.Schema.Types.ObjectId;
    const { id } = req.params //req.params;
    console.log(req.params);
    const medical = await Medicals.findByIdAndUpdate(
        { _id: id },
        {
            $push:
            {
                ratings: req.body.ratings,
                _id: commentId
            }
        }
    );
    return res.status(200).send(medical);
});

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