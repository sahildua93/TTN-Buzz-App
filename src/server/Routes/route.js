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
    app.use('/Complaint',require('../API/Complaint/index'));

    app.get('/api/profile', (req, res) => {
        res.redirect('/profile');
    });

    app.get('/api/logout', (req, res) =>{
       /* console.log('jasdadskjhaksjdh');
        res.cookie('connect.sid','');
        req.logout();
        res.redirect('/');*/

       req.session.destroy((err)=>{
           if(err){
               console.log('Error while destroyinh session -->', err);
           }
               console.log('Session is -->', req.session);
           res.cookie('userId', undefined);
           res.cookie('connect.sid', undefined);
           // req.logOut();
           res.redirect('/');
       })
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