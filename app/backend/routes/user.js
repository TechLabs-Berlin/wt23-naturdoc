const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const { userController } = require('../controllers');

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));


router.use(express.json());

//get a user
router.get('/', userController.getUser);

//get a user's favorite remmedies
router.get('/:id/favorites', userController.getFavorites);

module.exports = router;