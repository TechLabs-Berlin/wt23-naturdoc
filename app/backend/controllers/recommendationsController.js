const express = require('express');
const catchAsynch = require('../utilities/catchAsynch');
const axios = require('axios');


//get remedy recommendation
const getRemedyRecommendation = catchAsynch(async (req, res) => {
    const body = req.query.symptomsUser;
    const responseDS = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/remedies/query',
        headers: {
            'Content-Type': 'application/json'
        },
        data:
        {
            "symptomsUser": body
        }
    }
    )
    const response = responseDS.data.map(remedyItem => {
        return {
            remedyName: remedyItem.remedyName,
            symptomsMatched: remedyItem.symptomsMatched,
            ratingAverage: remedyItem.ratingAverage,
            _id: remedyItem._id,
            medicinalUses: remedyItem.medicinalUses,
            totalNumberofRatings: remedyItem.totalNumberofRatings,
            iconReference: remedyItem.iconReference
        }
    })
    return res.status(200).send(response);
});

module.exports = { 
    getRemedyRecommendation
}