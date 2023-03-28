const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const { userModel } = require('../models');

const catchAsynch = require('../utilities/catchAsynch');
const { checkLogin } = require('../middleware');
const { connect } = require('../database/database');

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));


router.use(express.json());

//get a user
router.get('/', catchAsynch(async (req, res) => {
    const userTest = "6420450b3d25951c719ec768";
    const user = await userModel.findById({ _id: userTest });
    const response = {
        username: user.username,
        email: user.email,
        _id: user._id
    }

    return res.status(200).send(response);
}));

router.get('/:id/favorites', catchAsynch(async (req, res) => {
    const userTest = "6420450b3d25951c719ec768";
    const user = await userModel.findById({ _id: userTest });
    console.log(user);
    const response = user.favorites.map(favoriteItem => {
        return {
            _id: favoriteItem.remedyId
        }
    })
    return res.status(200).send(response);
}));

module.exports = router;