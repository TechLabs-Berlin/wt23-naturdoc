const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RemediesSchema = new Schema({
    remedyId: mongoose.Schema.Types.ObjectId,
    remedyName: String,
    symptoms: Array,
    ratings: [
        {
            _id: false,
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            ratingValue: Number
        }
    ],
    ratingAverage: Number,
    totalNumberofRatings: Number,
    symptomsMatched: Array,
    medicinalUses: Array,
    iconReference: String,
    commonNames: String,
    treatmentClinical: String,
    treatmentTraditional: String,
    treatmentFolk: String,
    contraindication: String,
    warnings: String,
    adverseEffects: String,
    posology: String,
    doctorAlert: String,
})
module.exports = mongoose.model('Remedy', RemediesSchema);