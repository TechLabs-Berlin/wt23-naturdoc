const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;


const MedicalSchema = new Schema({
    TAXON: String,
    ACTIVTIY: String,
    CNAME: String,
    FAMILY: String,
    GENUS: String,
    SPECIES: String,
    VERNAC: String,
    CLINICAL: String,
    TRADITIONAL: String,
    FOLK: String,
    CONTRAINDICATION: String,
    WARNING: String,
    ADVERSE: String,
    POSOLOGY: String
});

module.exports = mongoose.model('Remedy', MedicalSchema);



//const RemediesSchema = new Schema({
//    remedyName: String,
//    symptoms: Array,
//    ratings: [
//        {
//            type: mongoose.Schema.Types.ObjectId,
//            ref: 'Ratings'
//        }
//    ],
//    ratingAverage: Number,
//    totalNumberofRatings: Number
//})
//module.exports = mongoose.model('Remedy', RemediesSchema);


