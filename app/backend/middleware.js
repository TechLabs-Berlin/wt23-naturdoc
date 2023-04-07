module.exports.checkLogin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'please sign in');
        return res.redirect('/login')
    };
    next();
}