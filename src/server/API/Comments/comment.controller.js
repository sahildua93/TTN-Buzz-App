/**
 * Created by sahil-dua on 18/5/17.
 */
const commentService = require('./comment.service');

exports.createComment = (req, res) => {
    let commentDetails = req.body;
    Object.assign(commentDetails, {
        user_id : req.user._id,
        user_image: req.user.image_url,
        username: req.user.username
    });

    console.log('comment details -----',commentDetails);
    commentService.createComment(commentDetails, (err, commentData) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(commentData);
        }
    })
};


exports.fetchComments = (req, res) => {
    commentService.fetchComments((err, comments) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(comments);
        }
    })
};