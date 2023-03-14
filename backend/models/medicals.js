const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MedicalSchema = new Schema({
    remedy: String,
    symptom: String,
    description: String
});

module.exports = mongoose.model('Medical', MedicalSchema);
