const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;


const RatingsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    remedyId: {
        type: Schema.Types.ObjectId,
        ref: 'Remedies'
    },
    remedyName: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: Number
});

module.exports = mongoose.model('Ratings', RatingsSchema);

