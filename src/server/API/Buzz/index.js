/**
 * Created by sahil-dua on 10/5/17.
 */

const buzzController = require('./buzz.controller');
const express = require('express');
const buzz = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function (req, file , callback) {
        callback(null,'src/server/tmp/uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+'_'+file.originalname);
    }
});
const uploadPath = multer({storage: storage});

buzz.use(uploadPath.single('file'));
buzz.post('/create-buzz', buzzController.createBuzz);
buzz.get('/fetch-buzz', buzzController.fetchBuzz);
buzz.put('/like-dislike', buzzController.likeDislike);

module.exports = buzz;