const express = require('express');
const catchAsynch = require('../utilities/catchAsynch');
const { userModel} = require('../models');
const mongoose = require('mongoose');


// at the moment, we are hardcoding the user id until login is fully implemented. Please change the id here to test with a different user
const userTest = "6429467b2c80d6e105dd286d";

//User ids for our test users: 
//Julio: 6429467b2c80d6e105dd286d
//Elli: 64294d580fd1c97588893d3a
//George: 6429466a2c80d6e105dd2869
//Anna: 642946572c80d6e105dd2865

//get a user
const getUser = catchAsynch(async (req, res) => {
   // const userTest = "6420450b3d25951c719ec768";
    const user = await userModel.findById({ _id: userTest });
    const response = {
        username: user.username,
        email: user.email,
        _id: user._id
    }

    return res.status(200).send(response);
});

// get user's favorite remmedies
const getFavorites = catchAsynch(async (req, res) => {
  //  const userTest = "6420450b3d25951c719ec768";
    const user = await userModel.findById({ _id: userTest });
    console.log(user);
    const response = user.favorites.map(favoriteItem => {
        return {
            _id: favoriteItem.remedyId
        }
    })
    return res.status(200).send(response);
});


module.exports = { 
    getUser,
    getFavorites
}