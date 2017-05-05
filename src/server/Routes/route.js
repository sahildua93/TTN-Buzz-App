/**
 * Created by sahil-dua on 4/5/17.
 */

let passport = require('passport');
let express = require('express');
let expressSession = require('express-session')
let GoogleStrategy = require('../Passport/google.auth');


module.exports =(app) => {

    app.use(expressSession({secret: '123456789'}),
        passport.initialize(),
        passport.session()
    );

    GoogleStrategy.googleAuth();

    app.get('/login', passport.authenticate('google', {scope: ["profile","email"]}));

    app.get('/profile', function (req, res) {
        res.sendFile('/home/sahil-dua/TTN-Buzz/src/assets/about.html')
    });

    app.get('/oauth2callback', passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: 'http://localhost:3004/'
    }));


//
// app.get('/logout', function (req, res) {
//     req.session.destroy();
//     req. logout();
//     res.redirect('/login');
// });

};