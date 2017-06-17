/**
 * Created by sahil-dua on 2/5/17.
 */

const userService = require('./user.service');

exports.getUser = (req, res) => {
    res.send(req.user);
};
