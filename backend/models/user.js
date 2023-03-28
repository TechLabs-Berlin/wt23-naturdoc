const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    ratings: [
        {
            remedyId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Remedies'
            },
            ratingValue: Number,
            reviewDescription: String,
            reviewName: String
        }
    ],
    favorites: [
        {
            remedyId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Remedies'
            }
        }
    ]
});
UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);
