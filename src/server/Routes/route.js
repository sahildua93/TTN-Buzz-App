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
  app.get('/api/login', passport.authenticate('google', {scope: ["profile", "email"]}));
  app.get('/oauth2callback', passport.authenticate('google', {
    failureRedirect: '/login'
  }), (req, res) => {
    req.session.user = {_id: req.user.id, email: req.user.email };
    res.redirect('/profile/buzz');
  });

  isAuthenticate = (req, res, next) => {
    if (req.session.user) {
      next()
    }
    else
      res.redirect('/');
  };

  app.use('/Users', isAuthenticate, require('../API/User/index'));
  app.use('/Buzz', isAuthenticate, require('../API/Buzz/index'));
  app.use('/Comment', isAuthenticate, require('../API/Comments/index'));
  app.use('/Complaint', isAuthenticate, require('../API/Complaint/index'));

  app.get('/api/profile', isAuthenticate, (req, res) => {
    res.redirect('/profile');
  });

  app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log('Error while destroying session -->', err);
      }
      res.redirect('/');
    })
  });
};