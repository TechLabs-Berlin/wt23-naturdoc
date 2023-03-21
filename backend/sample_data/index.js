const mongoose = require('mongoose');
//const Medical = require('../models/remedies.js');
const Remedy = require('../models/remedies.js');
const sample = require('./medicals_sample.js');

mongoose.connect('mongodb://localhost:27017/naturdoc', {
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection.error:"))
db.once("open", () => {
    console.log("Database connected");
});


//const seedDB = async () => {
//    await Medical.deleteMany({})
//    for (let i = 1; i <= 2; i++) {
//        const med = new Medical({
//            symptom: `${sample[i].symptom}`,
//            remedy: `${sample[i].remedy}`,
//            rating: `${sample[i].rating}`,
//            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis, non harum quaerat, saepe minima, accusantium vel libero assumenda fuga unde modi! Quia molestiae aut, eum deserunt ducimus omnis deleniti.',
//        })
//        await med.save();
//    }
//};

const seedDB = async () => {
    await Remedy.deleteMany({})
    for (let i = 1; i <= 1; i++) {
        const med = new Remedy({
            symptoms: `${sample[i].symptoms}`,
            remedyName: `${sample[i].remedyName}`,
            //ratings: `${sample[i].ratings}`,
            ratingAverage: `${sample[i].ratingAverage}`,
            totalNumberofRatings: `${sample[i].totalNumberofRatings}`,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat corporis, non harum quaerat, saepe minima, accusantium vel libero assumenda fuga unde modi! Quia molestiae aut, eum deserunt ducimus omnis deleniti.',
        })
        await med.save();
    }
};


seedDB().then(() => {
    mongoose.connection.close()
});
