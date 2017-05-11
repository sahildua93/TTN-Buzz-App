/**
 * Created by sahil-dua on 9/5/17.
 */

const Buzz = require('./buzz.model.js');

exports.createBuzz = function (buzzData, callback) {
    console.log('buzz data is ', buzzData);
    Buzz.create(buzzData,function (err, buzz) {
        if(err){
            console.log('Buzz not created XXXXXX', err);
            callback(err);
        }
        else
        {
            console.log('Buzz Created !!!!!!')
            callback(null, buzz);
        }
    })
}
