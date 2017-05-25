const complaintService = require('./complaint.service');

exports.createComplaint = (req, res) => {
    const complaintData = req.body;
    Object.assign(complaintData, {
        creator : req.user._id,
        user_picture:req.user.image_url,
        image : req.file ? req.file.filename : '' ,
    });
    complaintService.createComplaint(complaintData, (err, complaint) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(complaint);
        }
    });
};

exports.fetchComplaint = (req, res) => {
    let userId =  req.params.userId;
    complaintService.fetchComplaint(userId, (err, complaint) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(complaint);
        }
    })
};