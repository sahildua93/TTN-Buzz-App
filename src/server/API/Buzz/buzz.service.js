/**
 * Created by sahil-dua on 9/5/17.
 */

const Buzz = require('./buzz.model.js');

exports.createBuzz = (buzzData, callback) => {
    Buzz.create(buzzData, (err, buzz) => {
        if (err) {
            console.log('Buzz not created XXXXXX', err);
            callback(err);
        }
        else {
            console.log('Buzz Created !!!!!!');
            callback(null, buzz);
        }
    })
};

exports.fetchBuzz = (skipLimit,callback) => {
    let skipValue = parseInt(skipLimit.skip);

    Buzz.find({}).sort({createdAt:-1}).skip(skipValue).limit(5).exec((err,buzzData) => {
        if(err){
            console.log('Error while populating buzzes', err);
        }
        else{
            console.log('All buzz populated !!!');
            callback(null,buzzData);
        }
    })
};

// exports.likeDislike = (userDetails, callback) => {
//     Buzz.findOne({'_id': userDetails.buzz_id}, (err, buzz) => {
//         buzz.likes_dislikes = [...buzz.likes_dislikes.filter((op) => (op.user_id !== userDetails.user_id)), userDetails];
//         buzz.save((err) => {
//             if (err) {
//                 console.log('Error in updation !', err);
//                 callback(err);
//             }
//             else {
//                 callback(null, userDetails);
//             }
//         })
//     })
// };

//********************************************************************************************

// Buzz.find({'_id':postId},function(err,data){
//     if(err){
//         res.send(err);
//     }
//     else{
//         console.log('buzz with like found',data);
//         if(like === 'like'){
//             data.find({dislike:{$elemMatch: {userId}}},function(err,data){
//                 if(err){
//                     res.send(err);
//                 }
//                 else{
//                     if(data.length !== 0){
//                         Buzz.update({'_id':postId},{$pull: {'dislike': userId}});
//                     }
//                     console.log('buzz contains dislike by same user.',data);
//                     Buzz.update({'_id':postId},{$push: {'like': userId}});
//                 }
//             })
//         }
//     }
// })

exports.likeDislike = (userDetails, callback) => {
    const user = {
        'buzz_id': userDetails.buzz_id,
        'user_id': userDetails.user_id,
        'category': userDetails.category,
    };
    const itemToPush = {};
    const itemToPull = {};

    if (userDetails.category === 'like') {
        itemToPush['likes'] = user;
        itemToPull['dislike'] = { 'user_id': user.user_id }
    } else {
        itemToPush['dislike'] = user;
        itemToPull['likes'] = { 'user_id': user.user_id }
    }

    Buzz.update({'_id': userDetails.buzz_id},
        {
            $addToSet: itemToPush,
            $pull: itemToPull,
        }, (err, updatedData) => {
            if(err) {
                console.log('error while updating XX');
                 callback(err);
            }
            else{
                console.log('updated successfully !!', updatedData);
                 callback(user);
            }
        });
};


// taking 2 arrays


// const user = {
//     'user_id': userDetails.user_id,
//     'category': userDetails.category,
// };
// const itemToPush = {};
// const itemToPull = {};
//
// if (userDetails.category === 'like') {
//     itemToPush['likes'] = user;
//     itemToPull['dislike'] = { 'user_id': user.user_id }
// } else {
//     itemToPush['dislike'] = user;
//     itemToPull['likes'] = { 'user_id': user.user_id }
// }
//
// Buzz.update({'_id': userDetails.buzz_id},
//     {
//         $addToSet: itemToPush,
//         $pull: itemToPull,
//     }, (err, updatedData) => {
//     if(err) {
//         console.log('error while updating XX');
//         callback(err);
//     }
//     else{
//         console.log('updated successfully !!', updatedData);
//         callback(user);
//     }
//     });
