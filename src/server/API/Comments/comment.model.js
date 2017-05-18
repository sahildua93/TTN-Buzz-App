/**
 * Created by sahil-dua on 18/5/17.
 */

const mongoose = require('mongoose');
require('../../Config/datasource');

const commentSchema = new mongoose.Schema(
    {
        user_id : {
            type: String
        },
        buzz_id : {
            type: String
        },
        comment : {
            type : String,
        },
        username : {
            type : String
        },
        user_image: {
            type: String
        },
    }, {versionKey : false, timestamps : true}
);

module.exports = mongoose.model('Comment', commentSchema);