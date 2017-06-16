/**
 * Created by sahil-dua on 10/5/17.
 */

const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const multerCloudinary = require('multer-cloudinary');
const buzzController = require('./buzz.controller');
const cloudinaryConstants = require('../../Constants/constant');
const buzz = express.Router();
// const storage = multer.diskStorage({
//     destination : function (req, file , callback) {
//         callback(null,'src/server/tmp/uploads/');
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now()+'_'+file.originalname);
//     }
// });

cloudinary.config({
  cloud_name: cloudinaryConstants.CLOUD_NAME,
  api_key: cloudinaryConstants.API_KEY,
  api_secret: cloudinaryConstants.API_SECRET
});
let cloudinaryStorage = multerCloudinary({cloudinary: cloudinary});
let cloudinaryUpload = multer({storage: cloudinaryStorage});
// const uploadPath = multer({storage: storage});

// buzz.use(cloudinaryUpload.single('file'));
buzz.use(cloudinaryUpload.fields([{name: 'file', maxCount:1}]));
buzz.post('/create-buzz', buzzController.createBuzz);
buzz.get('/fetch-buzz/:skip', buzzController.fetchBuzz);
buzz.put('/like-dislike', buzzController.likeDislike);
buzz.get('/lost-found' ,buzzController.lostAndFound);

module.exports = buzz;