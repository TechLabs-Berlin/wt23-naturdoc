const ratings = require('./ratings');
const user = require('./user');
const remedies = require('./remedies');
const symptoms = require('./symptoms');

module.exports = {
    userModel: user,
    ratingsModel: ratings,
    remediesModel: remedies,
    symptomsModel: symptoms

}