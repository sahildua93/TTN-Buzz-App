/**
 * Created by sahil-dua on 4/5/17.
 */

const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('../Passport/google.auth');

module.exports = (app) => {

    GoogleStrategy.googleAuth();
    app.get('/api/login', passport.authenticate('google', {scope: ["profile", "email"]}));
    app.get('/oauth2callback', passport.authenticate('google', {
        successRedirect: '/api/profile',
        failureRedirect: '/'
    }));

    //app.use(isLoggedin);

    app.use('/Users',require('../API/User/index.js'));
    app.use('/Buzz',require('../API/Buzz/index'));
    app.get('/api/profile', function (req, res) {
        res.redirect('/profile')
    });
    app.get('/api/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    // function isLoggedin(req, res, next) {
    //     if (req.url == '/api/profile') {
    //         if(req.user){
    //             if(req.url == '/'){
    //                 next();
    //             }
    //         }
    //         next();
    //     }
    //     else {
    //         res.redirect('/')
    //     }
    // }
};