const buzzService = require('./buzz.service');

exports.createBuzz = (req, res) => {
  const buzzData = req.body;
  Object.assign(buzzData, {
    creator: req.user._id,
    username: req.user.username,
    user_picture: req.user.image_url,
    image: req.files.file ?
      {
        public_id: req.files.file[0].public_id,
        secure_url: req.files.file[0].secure_url
      } :
      '',
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
    let skip =  req.params;
    buzzService.fetchBuzz(skip, (err, buzz) => {
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
    Object.assign(userDetails, {
        user_id: req.user._id,
    });
    buzzService.likeDislike(userDetails, (err, userData) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(userData);
        }
    })
};


exports.lostAndFound = (req, res) => {
  console.log("Check Deployment.............")
  buzzService.fetchLostAndFound((err, lostAndFoundBuzz) => {
    if(err){
      res.send(err);
    }
    else
      res.send(lostAndFoundBuzz);
  })
};