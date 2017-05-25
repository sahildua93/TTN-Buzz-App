/**
 * Created by sahil-dua on 10/5/17.
 */

const complaintController = require('./complaint.controller');
const express = require('express');
const complaint = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function (req, file , callback) {
        callback(null,'src/server/tmp/complaint_uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now()+'_'+file.originalname);
    }
});
const uploadPath = multer({storage: storage});

complaint.use(uploadPath.single('file'));
complaint.post('/create-complaint', complaintController.createComplaint);
complaint.get('/fetch-complaint/:userId', complaintController.fetchComplaint);
module.exports = complaint;