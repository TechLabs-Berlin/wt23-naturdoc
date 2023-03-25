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
    console.log(remedies);
    const response = {
        remedyName: remedies.remedyName,
        symptoms: remedies.symptoms,
        ratingAverage: remedies.ratingAverage,
        _id: remedies._id
    }
    console.log(response)

    return res.status(200).send(response);
}));


//add the rating for a single remedy
router.put('/:id', catchAsynch(async (req, res) => {
    const ratingId = new mongoose.Types.ObjectId;
    console.log('*******');
    console.log(req.body);

    const { id } = req.params //req.params;
    const { rating } = req.body;
    //const userId = "64151b8670662285f3b36c13";
    const userTest = "64151b8670662285f3b36c13";

    const newRating = await remedyRating.findOneAndUpdate(
        { remedyId: id, userId: userTest },
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

    // console.log(addRatingToUser);
    try {
        const product = await Medicals.findById(id);
        console.log(product.ratings)
        const alreadyRated = product.ratings.find(
            rating => rating.userId.toString() === userTest.toString()
        );

        console.log(alreadyRated);
        if (alreadyRated) {
            const updateRating = await Medicals.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated }
                },
                {
                    $set: { "ratings.$.ratingValue": rating }
                },
                {
                    new: true
                }

            );
            res.json(updateRating);
            //find product by id
            //find rating
        } else {
            //find product and add rating
            const rateProduct = await Medicals.findByIdAndUpdate(id, {
                $push: {
                    ratings: {
                        ratingValue: rating,
                        userId: userTest
                    }
                }
            },
                {
                    new: true
                }
            );
            return res.status(200).send(rateProduct);
        }
    } catch (error) {
        throw new Error(error);
    }
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