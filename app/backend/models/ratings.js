const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Remedies = require('./remedies');


const RatingsSchema = new Schema({
    ratingId: mongoose.Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    remedyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Remedies'
    },
    ratingValue: Number,
    reviewDescription: String,
    reviewName: String,
    remedyName: String
}, {timestamps: true});

module.exports = mongoose.model('Rating', RatingsSchema);

