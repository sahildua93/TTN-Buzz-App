/**
 * Created by sahil-dua on 9/5/17.
 */

const mongoose = require('mongoose');
require('../../Config/datasource');

const buzzSchema = new mongoose.Schema(
    {
        creator : {
            type: String
        },
        comment : {
            type: String
        },
        username : {
          type: String
        },
        category : {
            type : String
        },
        image : {
            type : Object
        },
        user_picture: {
            type: String
        },
        likes: [],
        dislike: [],

    }, {versionKey : false, timestamps : true}
);

module.exports = mongoose.model('Buzz', buzzSchema);