const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Remedies = require('./remedies');


const RatingsSchema = new Schema({
    // _id: mongoose.Types.ObjectId,
    //userId: {
    //    type: Schema.Types.ObjectId,
    //    ref: 'User'
    //},
    remedyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Remedies'
    },
    //remedyName: {
    //    type: Schema.Types.ObjectId,
    //    ref: 'User'
    //},
    ratings: Number
});

module.exports = mongoose.model('Rating', RatingsSchema);

