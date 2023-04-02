const express = require('express');
const { remediesModel, ratingsModel, userModel} = require('../models');
const mongoose = require('mongoose');
const catchAsynch = require('../utilities/catchAsynch');

// at the moment, we are hardcoding the user id until login is fully implemented. Please change the id here to test with a different user
const userTest = "6429467b2c80d6e105dd286d";

//User ids for our test users: 
//Julio: 6429467b2c80d6e105dd286d
//Elli: 64294d580fd1c97588893d3a
//George: 6429466a2c80d6e105dd2869
//Anna: 642946572c80d6e105dd2865


//get all remedies
const getAllRemedies = catchAsynch(async (req, res) => {
    const remedies = await remediesModel.find({});
    return res.status(200).send(remedies);
});


//get a single remedy by id
const getRemedyById = catchAsynch(async (req, res) => {
    const remedies = await remediesModel.findById(req.params.id);
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
});

//get all ratings for a remmedy
const getAllRatingsPerRemedy = catchAsynch(async (req, res) => {
    const { id } = req.params;
    const newId = new mongoose.Types.ObjectId(id)
    // get ratings for a remedy and then the usernames of the people who made those ratings
    const ratingsWithUsernames = await ratingsModel.aggregate([
        {
          $match: { remedyId: newId },
        },
        // find users for the userIds in each item
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'user'
          },
        },
       // get the usernames from the users and put them to the ratings
        {
          $unwind: '$user'
        },
       // create a new object from the ratingss with username included
        {
          $project: {
            _id: 1,
            ratingValue: 1,
            reviewDescription: 1,
            reviewName: 1,
            remedyName: 1,
            remedyId: 1,
            createdAt: 1,
            updatedAt: 1,
            username: '$user.username',
            userId: '$user._id'
          },
        }
      ]);
      console.log (ratingsWithUsernames);
      //rename _id to ratingId
      const response = ratingsWithUsernames.map(ratingItem => {
        return{
            ratingId: ratingItem._id,
            ratingValue: ratingItem.ratingValue,
            reviewDescription: ratingItem.reviewDescription,
            reviewName: ratingItem.reviewName,
            remedyName: ratingItem.remedyName,
            remedyId: ratingItem.id,
            username: ratingItem.username,
            userId: ratingItem.userId,
            created_at: ratingItem.createdAt,
            updated_at: ratingItem.updatedAt
      }})

     return res.status(200).send(response);
});


//get the rating of a certain user for a remedy
const ratingsPerRemedyPerUser = catchAsynch(async (req, res) => {
   // const userTest = "6420450b3d25951c719ec768";
    const { id } = req.params;
    const remedyName = await remediesModel.findById(id);
    console.log(remedyName.remedyName);
    const ratings = await ratingsModel.findOne({ remedyId: id, userId: userTest });
    console.log(ratings.ratingValue);
    const response = {
        ratingValue: ratings.ratingValue,
        remedyName: remedyName.remedyName,
        _id: ratings.remedyId,
        reviewDescription: ratings.reviewDescription,
        reviewName: ratings.reviewName,
        userId: ratings.userId,
        ratingId: ratings._id
    }
    console.log(response)

    return res.status(200).send(response);
});

//add the rating for a single remedy
const ratingsPerRemedy = catchAsynch(async (req, res) => {
    console.log('*******');
    console.log(req.body);
    console.log(req.user);

    const { id } = req.params;
    const { ratingValue, reviewName, reviewDescription } = req.body.data;
    //const userTest = "641ed2ecf7892783bdacbeb9";
    //const userTest = "6420450b3d25951c719ec768";

    //UPDATE RATING MODEL: 
    const product = await remediesModel.findById(id);
    const newRating = await ratingsModel.findOneAndUpdate(
        { remedyId: id, userId: userTest },
        { ratingValue: ratingValue, reviewName: reviewName, reviewDescription: reviewDescription, remedyName: product.remedyName },
        {
            new: true,
            upsert: true,
            timestamps: true
        }
    );
    console.log("RATINGID");
    console.log(newRating.id);
    console.log(newRating.timestamp)


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
                        remedyId: id,
                        reviewName: reviewName,
                        reviewDescription: reviewDescription
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
        const newRatingAverage = ((remedyRatings.length === 0) ? ratingValue : (remedyRatings.reduce((total, next) => total + next.ratingValue, 0) + ratingValue) / (remedyRatings.length + 1)).toFixed(1);
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
                        ratingAverage: ((remedyRatings.reduce((total, next) => total + next.ratingValue, 0) - alreadyRated.ratingValue + ratingValue) / remedyRatings.length).toFixed(1),
                        reviewName: reviewName,
                        reviewDescription: reviewDescription,
                        ratingId: newRating.id
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
                        userId: userTest,
                        reviewName: reviewName,
                        reviewDescription: reviewDescription,
                        ratingId: newRating.id
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
});


//delete a rating for a remedy
const deleteRating = catchAsynch(async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    //const userId = "64151a880022f6c93207f2b9";
    const deletedRating = await ratingsModel.deleteOne(
        { remedyId: id, userId: userId });
    return res.status(200).send(deletedRating);
});


//save remedy as favorite:
const saveAsFavorite = catchAsynch(async (req, res) => {
    const { id } = req.params;
   // const userTest = "64151b8670662285f3b36c13";
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
});

//delete remedy from favorites
const deleteFromFavorites = catchAsynch(async (req, res) => {
    const { id } = req.params;
    //const userTest = "64151b8670662285f3b36c13";
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
});


module.exports = { 
    getAllRemedies,
    getRemedyById,
    getAllRatingsPerRemedy,
    ratingsPerRemedyPerUser,
    ratingsPerRemedy,
    deleteRating,
    saveAsFavorite,
    deleteFromFavorites
}