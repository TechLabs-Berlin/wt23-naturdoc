const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const Medicals = require('../models/remedies');
const remedyRating = require('../models/ratings');
const User = require('../models/user');

const catchAsynch = require('../utilities/catchAsynch');
const { checkLogin } = require('../middleware');
const { connect } = require('../database/database');

router.use(express.json());

//get all remedies
router.get('/', catchAsynch(async (req, res) => {
    const userTest = "64151b8670662285f3b36c13";
    const user = await User.findById({ _id: userTest });
    const response = {
        username: user.username,
        email: user.email,
        _id: user._id
    }

    return res.status(200).send(response);
}));

router.get('/:id/favorites', catchAsynch(async (req, res) => {
    const userTest = "64151b8670662285f3b36c13";
    const user = await User.findById({ _id: userTest });
    console.log(user);
    const response = user.favorites.map(favoriteItem => {
        return {
            _id: favoriteItem.remedyId
        }
    })
    return res.status(200).send(response);
}));

module.exports = router;