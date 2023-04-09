const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const { userModel } = require('../models');

const catchAsynch = require('../utilities/catchAsynch');
const { checkLogin } = require('../middleware');
const { connect } = require('../database/database');

//const app = express();
router.use(express.json());

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

router.use(session(sessionConfig));
router.use(flash());
router.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});
router.use(passport.initialize())
router.use(passport.session())
passport.use(new LocalStrategy(userModel.authenticate()));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

//signup 
router.post('/signup', catchAsynch(async (req, res) => {
    try {
        console.log(req);
        const { email, username, password } = req.body;
        const user = new userModel({ email, username })
        const registeredUser = await userModel.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Successfully signed up');
            res.send('Successfully signed up');
        })

    }
    catch (e) {
        req.flash('error', e.message);
        res.send(e.message);
    }
}));

//login
router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'welcome back');
    res.send('Welcome back')
});


//logout
router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', "Successfully logged out!");
        res.send('Successfully logged out');
    });
});

module.exports = router;