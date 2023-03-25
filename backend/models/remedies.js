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
    totalNumberofRatings: Number
})
module.exports = mongoose.model('Remedy', RemediesSchema);