/**
 * Created by sahil-dua on 2/5/17.
 */
const User = require('./user.model');

exports.createUser = function(userData)  {
    console.log('user data -----------------------------',userData)
    userData.save(function (err) {
        if(err) {
            console.log("user not created XXXXXXXXXX", err);
            throw err
        }
        else
        {
            console.log('User created !!!!--------------')
            return
        }
    })
}