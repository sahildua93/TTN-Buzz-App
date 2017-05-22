/**
 * Created by sahil-dua on 4/5/17.
 */

const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('../Passport/google.auth');

module.exports = (app) => {

    GoogleStrategy.googleAuth();
    app.get('/', (req, res) => {
        res.redirect('/login');
    });
    app.get('/api/login',passport.authenticate('google', {scope: ["profile", "email"]}));
    app.get('/oauth2callback', passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

    app.use('/Users',require('../API/User/index'));
    app.use('/Buzz',require('../API/Buzz/index'));
    app.use('/Comment',require('../API/Comments/index'));

    app.get('/api/profile', (req, res) => {
        res.redirect('/profile');
    });

    app.get('/api/logout', (req, res) =>{
        res.cookie('connect.sid', '', {expires: new Date(1), path: '/' });
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