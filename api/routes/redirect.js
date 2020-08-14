module.exports.loginUsers = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        next();
    }
};

module.exports.nonLoginUsers = (req, res, next) => {
    if (req.isUnauthenticated()) {
        res.redirect('/login');
    } else {
        next();
    }
};

