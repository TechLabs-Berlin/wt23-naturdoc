const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SymptomsSchema = new Schema({
    symptomName: String
});

module.exports = mongoose.model('Symptom', SymptomsSchema);