const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local')

const { ratingsModel, remediesModel, userModel } = require('../models');

//const Medicals = require('../models/remedies');
//const remedyRating = require('../models/ratings');
//const User = require('../models/user');

const catchAsynch = require('../utilities/catchAsynch');
const { checkLogin } = require('../middleware');
const { connect } = require('../database/database');

router.use(express.json());

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));

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


//get all remedies
router.get('/', catchAsynch(async (req, res) => {
    const remedies = await remediesModel.find({});
    return res.status(200).send(remedies);
}));


//get a single remedy by id
router.get('/:id', catchAsynch(async (req, res) => {
    const remedies = await remediesModel.findById(req.params.id);
    //console.log(remedies);
    const response = {
        remedyName: remedies.remedyName,
        symptomsMatched: remedies.symptomsMatched,
        ratingAverage: remedies.ratingAverage,
        totalNumberofRatings: remedies.totalNumberofRatings,
        commonNames: remedies.commonNames,
        iconReference: remedies.iconReference,
        medicinalUses: remedies.medicinalUses,
        treatmentClinical: remedies.treatmentClinical,
        treatmentTraditional: remedies.treatmentTraditional,
        treatmentFolk: remedies.treatmentFolk,
        contraindication: remedies.contraindication,
        warnings: remedies.warnings,
        adverseEffects: remedies.adverseEffects,
        posology: remedies.posology,
        doctorAlert: remedies.doctorAlert,
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
    console.log(req.user);

    const { id } = req.params //req.params;
    const { ratingValue } = req.body.data;
    //const userTest = "641ed2ecf7892783bdacbeb9";
    const userTest = "6420450b3d25951c719ec768";

    //UPDATE RATING MODEL: 
    const newRating = await ratingsModel.findOneAndUpdate(
        { remedyId: id, userId: userTest },
        { ratingValue: ratingValue },
        {
            new: true,
            upsert: true
        }
    );


    //UPDATE USER MODEL:
    try {
        const user = await userModel.findById(userTest);
        const alreadyRatedRemedy = user.ratings.find(
            rating => rating.remedyId.toString() === id.toString()
        );
        if (alreadyRatedRemedy) {
            const updateUser = await userModel.updateOne(
                {
                    ratings: { $elemMatch: alreadyRatedRemedy }
                },
                {
                    $set: { "ratings.$.ratingValue": ratingValue }
                },
                {
                    new: true
                }

            );
            res.json(updateUser);
        } else {
            //find product and add rating
            const rateRemedy = await userModel.findByIdAndUpdate(userTest, {
                $push: {
                    ratings: {
                        ratingValue: ratingValue,
                        userId: userTest,
                        remedyId: id
                    }
                }
            },
                {
                    new: true
                }
            );
        }
    } catch (error) {
        throw new Error(error);
    };




    //UPDATE REMEDY MODEL:
    try {
        //find remedy by id:
        const product = await remediesModel.findById(id);
        //calculate new rating average
        const remedyRatings = product.ratings;

        console.log("-------");
        const newRatingAverage = ((remedyRatings.length === 0) ? ratingValue : (remedyRatings.reduce((total, next) => total + next.ratingValue, 0) + ratingValue) / (remedyRatings.length + 1)).toFixed(2);
        //check if remedy is already rated by current user
        const alreadyRated = product.ratings.find(
            rating => rating.userId.toString() === userTest.toString()
        );

        //if user already rated the product, update the rating value
        if (alreadyRated) {
            const updateRating = await remediesModel.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated }
                },
                {
                    $set: {
                        "ratings.$.ratingValue": ratingValue,
                        ratingAverage: ((remedyRatings.reduce((total, next) => total + next.ratingValue, 0) - alreadyRated.ratingValue + ratingValue) / remedyRatings.length).toFixed(2)
                    }
                },
                {
                    new: true
                }

            );
            res.json(updateRating);


            //if user did not rate the product yet, add a new rating value
        } else {
            //find product and add rating
            const rateProduct = await remediesModel.findByIdAndUpdate(id, {
                $push: {
                    ratings: {
                        ratingValue: ratingValue,
                        userId: userTest
                    }
                },
                ratingAverage: newRatingAverage,
                totalNumberofRatings: remedyRatings.length + 1
            },
                {
                    new: true
                }
            );
            res.json(rateProduct);

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
    const deletedRating = await ratingsModel.deleteOne(
        { remedyId: id, userId: userId });
    return res.status(200).send(deletedRating);
}));


//save remedy as favorite:
router.put('/:id/save', catchAsynch(async (req, res) => {
    const { id } = req.params;
    //const product = await remediesModel.findById(id);
    const userTest = "64151b8670662285f3b36c13";
    const saveFavorite = await userModel.findByIdAndUpdate(userTest, {
        $push: {
            favorites: {
                remedyId: id
            }
        }
    },
        {
            new: true
        }
    )
    return res.status(200).send(saveFavorite);
}));

//save remedy as favorite:
router.delete('/:id/save', catchAsynch(async (req, res) => {
    const { id } = req.params;
    //const product = await remediesModel.findById(id);
    const userTest = "64151b8670662285f3b36c13";
    const deleteFavorite = await userModel.findByIdAndUpdate(userTest, {
        $pull: {
            favorites: {
                remedyId: id
            }
        }
    },
        {
            new: true
        }
    )
    return res.status(200).send(deleteFavorite);
}));

module.exports = router;