const User = require('../models/user-model');

module.exports.home = (req, res) => {
    res.render('pages/home');
};

module.exports.login = (req, res) => {
    res.render('pages/login');
};

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
};

module.exports.register = (req, res) => {
    res.render('pages/register');
};

module.exports.sendRegister = (req, res) => {
    User.findOrCreate({ username: req.body.username }, (err, record, created) => {
        if (err) { console.log(`An error has occured ${err}`); }
        if (created) {
            record.firstname = req.body.firstName;
            record.lastname = req.body.lastName;
            record.password = req.body.password;
            record.phone = req.body.phone;

            record.save()
                .then((data) => {
                    console.log(`Saved new user to database: ${data}`);
                    res.redirect('/login');
                })
                .catch((err) => {
                    console.log(`An error has occured when registering user: ${err}`);
                    res.redirect('/register');
                });
        } else {
            console.log(`A record with username ${req.body.username} found.`);
            res.send('Another user with this username has been registered');
        }
    });
};