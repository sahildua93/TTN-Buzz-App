/**
 * Created by sahil-dua on 2/5/17.
 */

const mongoose = require('mongoose');
require('../../Config/datasource');

const roles = ['User', 'Developer'];
const userSchema = new mongoose.Schema(
    {
        google_id: {
            type: String
        },
        username: {
            type: String
        },
        email_id: {
            type: String
        },
        image_url: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: "User",
            enum: roles
        },
    }, {versionKey: false, timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
