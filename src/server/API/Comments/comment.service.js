/**
 * Created by sahil-dua on 18/5/17.
 */
const Comment = require('./comment.model');

exports.createComment = (commentData, callback) => {
    Comment.create(commentData, (err, comment) => {
        if (err) {
            console.log('Comment not created XXXXXX', err);
            callback(err);
        }
        else {
            console.log('Comment Created !!!!!!');
            callback(null, comment);
        }
    })
};

exports.fetchComments = (callback) => {
    Comment.find({}).sort({createdAt:-1}).exec((err,allComments) => {
        if(err){
            console.log('Error while populating comments', err);
        }
        else{
            console.log('All comments populated !!!')
            callback(null,allComments);
        }
    })
};