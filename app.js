const express = require('express');

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('form')
});

app.listen(7000, () => {
    console.log("serving on port 7000")
})