/**
 * Created by sahil-dua on 10/5/17.
 */

const buzzController = require('../../API/Buzz/buzz.controller');
const express = require('express');
const buzz = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function (req, file , callback) {
        callback(null,'src/server/public/uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+file.originalname);
    }
})
const uploadPath = multer({storage: storage})

buzz.use(uploadPath.single('file'));

buzz.post('/create-buzz',buzzController.createBuzz);

module.exports = buzz;