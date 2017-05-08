/**
 * Created by sahil-dua on 4/5/17.
 */

let passport = require('passport');
let flash = require('connect-flash')
let express = require('express');
let expressSession = require('express-session');
let GoogleStrategy = require('../Passport/google.auth');


module.exports =(app) => {

    app.use(expressSession({secret: '123456789'}),
        passport.initialize(),
        passport.session());

    GoogleStrategy.googleAuth();

    app.get('/api/login', passport.authenticate('google', {scope: ["profile","email"]}));

    app.get('/api/profile',isLoggedin, function (req, res) {
        res.redirect('/profile')
    });

    app.get('/oauth2callback', passport.authenticate('google', {
        successRedirect: '/api/profile',
        failureRedirect: '/'
    }));



    function isLoggedin(req, res, next) {
        if(req.isAuthenticated()){
            console.log('sdasnajsfbabfhjajfjhafjha')
            return next();
        }
        else {
            console.log('----------------------asdasdas')
            res.redirect('/')
        }
    }


// app.get('/api/logout', function (req, res) {
//     req.session.destroy();
//     req. logout();
//     res.redirect('/login');
// });

};