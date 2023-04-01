const express = require('express');
const catchAsynch = require('../utilities/catchAsynch');
const { userModel} = require('../models');
const mongoose = require('mongoose');

//get a user
const getUser = catchAsynch(async (req, res) => {
    const userTest = "6420450b3d25951c719ec768";
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
    const userTest = "6420450b3d25951c719ec768";
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