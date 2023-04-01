const auth = require('./auth');
const recommendations = require('./recommendations');
const symptoms = require('./symptoms');
const remedies = require('./remedies');
const user = require('./user');

module.exports = {
    user: user,
    remedies: remedies,
    symptoms: symptoms,
    recommendations: recommendations,
    auth: auth
}