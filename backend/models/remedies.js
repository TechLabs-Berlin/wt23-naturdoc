const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//const MedicalSchema = new Schema({
//    TAXON: String,
//    ACTIVTIY: String,
//    CNAME: String,
//    FAMILY: String,
//    GENUS: String,
//    SPECIES: String,
//    VERNAC: String,
//    CLINICAL: String,
//    TRADITIONAL: String,
//    FOLK: String,
//    CONTRAINDICATION: String,
//    WARNING: String,
//    ADVERSE: String,
//    POSOLOGY: String
//});

//module.exports = mongoose.model('Remedy', MedicalSchema);



const RemediesSchema = new Schema({
    remedyId: mongoose.Schema.Types.ObjectId,
    remedyName: String,
    symptoms: Array,
    ratings: [
        {
            type: Number,
            ref: 'Rating'
        }
    ],
    ratingAverage: Number,
    totalNumberofRatings: Number
})
module.exports = mongoose.model('Remedy', RemediesSchema);


