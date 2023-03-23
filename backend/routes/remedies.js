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
    const remedies = await Medicals.find({});
    return res.status(200).send(remedies);
}));


//get a single remedy by id
router.get('/:id', catchAsynch(async (req, res) => {
    const remedies = await Medicals.findById(req.params.id);
    return res.status(200).send(remedies);
}));


//add the rating for a single remedy
router.put('/:id', catchAsynch(async (req, res) => {
    const ratingId = new mongoose.Types.ObjectId;
    console.log('*******');
    console.log(req.body);

    const { id } = req.params //req.params;
    const { rating } = req.body;
    const userId = "64151a880022f6c93207f2b9";

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
    const test = await Medicals.findById(id)
    const ratingsTest = test.ratings
    const userAlreadyReviewedFlagTest = ratingsTest.find(rating => rating.userId === userId)
    if (userAlreadyReviewedFlagTest) {
        const updateRating = await Medicals.updateOne({ id: id, "ratings.userId": userId },
//find product by id
//find rating
    } else {
        const noRatingYet = await Medicals.findByIdAndUpdate(id: id), {

        //find the product
        //add the rating
            { "ratings.userId": userId },
        )
    }
    const updateRemedy = await Medicals.updateOne({ id: id, "ratings.userId": userId }, // 
            {
                $addToSet:
                {
                    ratings: { ratingValue: rating, userId: userId },
                    new: true,
                    upsert: true
                }
            }
        );
return res.status(200).send(updateRemedy);
}));

//delete a rating for a remedy
router.delete('/:id', catchAsynch(async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const userId = "64151a880022f6c93207f2b9";
    const deletedRating = await remedyRating.deleteOne(
        { remedyId: id, userId: userId });
    return res.status(200).send(deletedRating);
}));

module.exports = router;