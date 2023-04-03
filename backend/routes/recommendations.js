const express = require('express');
const router = express.Router();
const cors = require('cors');

const { recommendationsController } = require('../controllers');

router.use(express.json());

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));

//get remedy recommendation
router.get('/getRemedyRecommendation', recommendationsController.getRemedyRecommendation);

module.exports = router;
