const auth = require('./auth');
const getRemedyRecommendation = require('./getRemedyRecommendation');
const getSymptoms = require('./getSymptoms');
const remedies = require('./remedies');
const user = require('./user');

module.exports = {
    user: user,
    remedies: remedies,
    getSymptoms: getSymptoms,
    getRemedyRecommendation: getRemedyRecommendation,
    auth: auth
}