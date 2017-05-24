/**
 * Created by sahil-dua on 2/5/17.
 */

const mongoose = require('mongoose');
module.exports = buzzConnection = mongoose.connect('mongodb://localhost/ttn-buzz');

mongoose.connection.on('open', function () {
 console.log('database connection successfull !!!!!!!!!!!')
});

mongoose.connection.on('error', function () {
    console.log('database connection error XXXXXXXXXXX')
});
