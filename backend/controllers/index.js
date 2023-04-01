const remedyController = require('./remedyController');
const recommendationsController = require('./recommendationsController');
const symptomsController = require('./symptomsController');
const userController = require('./userController');

module.exports = {
    remedyController: remedyController,
    recommendationsController: recommendationsController,
    userController: userController,
    symptomsController: symptomsController
}