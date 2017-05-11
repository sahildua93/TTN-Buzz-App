/**
 * Created by sahil-dua on 10/5/17.
 */

const userController = require('../../API/User/user.controller');
var express = require('express');
var user = express.Router();

user.get('/me',userController.getUser);

module.exports = user;

