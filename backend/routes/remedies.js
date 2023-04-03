const express = require('express');
const router = express.Router();
const cors = require('cors');

const { remedyController } = require('../controllers');

router.use(express.json());

router.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}));

//get all remedies
router.get('/', remedyController.getAllRemedies);

//get a single remedy by id
router.get('/:id', remedyController.getRemedyById);

//get all ratings for a remmedy
router.get('/:id/ratings', remedyController.getAllRatingsPerRemedy);

//get the rating of a certain user for a remedy
router.get('/:id/ratingsPerUser', remedyController.ratingsPerRemedyPerUser);

//add the rating for a single remedy
router.put('/:id', remedyController.ratingsPerRemedy);

//delete a rating for a remedy
router.delete('/:id', remedyController.deleteRating);

//save remedy as favorite:
router.put('/:id/save', remedyController.saveAsFavorite);

//delete remedy from favorites
router.delete('/:id/save', remedyController.deleteFromFavorites);

module.exports = router;