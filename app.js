const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Medicals = require('./models/medicals')
//const catchAsynch = require('../utilities/catchAsynch');

mongoose.connect('mongodb://localhost:27017/naturdoc');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection.error:"))
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('form')
});

app.get('/search', async (req, res) => {
    const medical = await medicals.find({});
    res.render('form')
});

app.listen(7000, () => {
    console.log("serving on port 7000")
})