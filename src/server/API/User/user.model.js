/**
 * Created by sahil-dua on 2/5/17.
 */

const mongoose = require('mongoose');
require('../Config/datasource');

//const roles = ['User', 'Developer']
const userSchema = new mongoose.Schema(
    {
        username: {
            type : String
        },
        email_id: {
            type : String
        },
        image_url:{
            type : String
        },
        role:{
            type : String,
            default : "User",
        },

    },{versionKey: false, timestamps : true}
)

module.exports = mongoose.model('User', userSchema);
