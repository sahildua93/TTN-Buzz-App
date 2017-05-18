/**
 * Created by sahil-dua on 10/5/17.
 */

const userController = require('./user.controller');
const express = require('express');
const user = express.Router();

user.get('/me',userController.getUser);

module.exports = user;

