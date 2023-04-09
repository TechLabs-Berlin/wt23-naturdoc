const express = require('express');
const catchAsynch = require('../utilities/catchAsynch');
const { symptomsModel} = require('../models');
const mongoose = require('mongoose');

//list all symptoms
const getSymptoms =  catchAsynch(async (req, res) => {
    const { symptom } = req.params;
    const symptomName = await symptomsModel.find({})
    const response = symptomName.map(symptomItem => {
        return {
            symptomName: symptomItem.symptomName,
            _id: symptomItem.id
        }
    })
    return res.status(200).send(response);
});


module.exports = { 
    getSymptoms
}