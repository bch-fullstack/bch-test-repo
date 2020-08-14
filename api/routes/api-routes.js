const router = require('express').Router();
const userController = require('../controllers/user-controller');
const redirect = require('./redirect');
const passport = require('passport');

router.get('/', redirect.nonLoginUsers, userController.home);

router.get('/login', redirect.loginUsers, userController.login);

router.post('/login/send', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', userController.logout);

router.get('/register', redirect.loginUsers, userController.register);

router.post('/register/send', userController.sendRegister);

module.exports = router;

