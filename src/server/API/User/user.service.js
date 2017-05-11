/**
 * Created by sahil-dua on 2/5/17.
 */
const User = require('./user.model');

exports.createUser = function (profile, callback) {
    User.create({
        google_id: profile.id,
        username: profile.displayName,
        email_id: profile.emails[0].value,
        image_url: profile.photos[0].value,
    }, function (err, data) {
        if (err) {
            console.log('Error while creating new User !', err);
            callback(err);
        }
        else {
            console.log('New user created !');
            callback(null, data);
        }
    })
}

exports.getUser = (user) => {
    User.find({}, (err, data) => {
        if (err)
            res.send("error while fetching data XXXXXX");
        if (data)
            res.send(data);
    })
}