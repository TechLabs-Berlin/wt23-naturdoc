const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const Medicals = require('./models/medicals');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const User = require('./models/ratings');
const catchAsynch = require('./utilities/catchAsynch');
const { checkLogin } = require('./middleware');

mongoose.connect('mongodb://localhost:27017/naturdoc');

//mongoose.connect('mongodb+srv://naturdoc:WhYJmBoDdO3tZ89Z@naturdoc.aj9zhtw.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection.error:"))
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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

// homepage
app.get('/', (req, res) => {
    res.render('form')
});

//app.get('/test', async (req, res) => {
//    const user = new User({ email: 'cristy@gmail.com', username: 'cristy' });
//    const newUser = await User.register(user, 'cats');
//    res.send(newUser);
//})


//query field to get remedy recommendation
app.get('/getRemedyRecommendation', catchAsynch(async (req, res) => {
    const { symptom } = req.query;
    if (symptom) {
        const remedies = await Medicals.find({ symptom }) //await get request from DS endpoint 
        res.send('medical found!') //if no result, then send an error message, render JSON info
    } else {
        const remedies = await Medicals.find({})
        res.send('all medicals')
    }

}));

//result list per user !!
//app.get('/remedies', catchAsynch(async (req, res) => {
//    const { symptom, remedy } = req.body;
//    const results = await Medicals.find(req.body.symptom);
//    // res.send(results)
//    //res.render('form', { results })
//}));

// list all medicals
//app.get('/remedies', catchAsynch(async (req, res) => {
//    const remedies = await Medicals.find({});
//    res.render('form', { remedies })
//}));

//medicals page 
app.get('/remedies/:id', catchAsynch(async (req, res) => {
    const medical = await Medicals.findById(req.params.id);
    //    res.render('form')
}));

//add the rating 
app.put('/remedies/:id/rating', catchAsynch(async (req, res) => {
    const medical = await Medicals.findById(req.params.id);
    //    res.render('form')
}));


//app.put('/medicals/:id', async (req, res) => {
//    const { id } = req.params;
//    const rating = await Ratings.findByIdAndUpdate(id, { ...req.body.rating });
//    res.redirect(`/medicals/${Medicals._id}`);
//})

//users endpoints: 

app.get('/register', (req, res) => {
    res.render('user')
})

app.post('/register', catchAsynch(async (req, res) => {
    try {
        console.log(req);
        const { email, username, password } = req.body;
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Successfully logged in');
            res.redirect('/');
        })

    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}));

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'welcome back');
    res.redirect('form')
});

app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', "Successfully logged out!");
        res.redirect('/');
    });
});

app.listen(7000, () => {
    console.log("serving on port 7000")
})