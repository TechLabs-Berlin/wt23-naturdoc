const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;


const MedicalSchema = new Schema({
    remedy: String,
    symptom: String,
    description: String,
    rating: Number
});

module.exports = mongoose.model('Medical', MedicalSchema);



//const RemediesSchema = new Schema({
//    remedyName: String,
//    symptoms: Array,
//    ratings: [
//        {
//            type: Schema.Types.ObjectId,
//            ref: 'Ratings'
//        }
//    ],
//    ratingAverage: Number,
//    totalNumberofRatings: Number
//})
//module.exports = mongoose.model('Remedy', RemediesSchema);


