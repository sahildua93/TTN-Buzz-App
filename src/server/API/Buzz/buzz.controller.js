const buzzService = require('./buzz.service');

exports.createBuzz = (req, res) => {
    const buzzData = req.body;
    Object.assign(buzzData, {
        creator : req.user._id,
        user_picture:req.user.image_url,
        image : req.file ? req.file.filename : '' ,
    });
    buzzService.createBuzz(buzzData, (err, buzz) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(buzz);
        }
    });
};

exports.fetchBuzz = (req, res) => {
    buzzService.fetchBuzz((err, buzz) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(buzz);
        }
    })
};

exports.likeDislike = (req, res) => {
    let userDetails = req.body;
    buzzService.likeDislike(userDetails, (err, userData) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(userData);
        }
    })
};
