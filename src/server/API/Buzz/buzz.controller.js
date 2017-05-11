const buzzService = require('./buzz.service');

exports.createBuzz = (req, res) => {
    const buzzData = req.body;
    Object.assign(buzzData, {
        creator : req.user._id,
        image : req.file.filename,
    })
    buzzService.createBuzz(buzzData, (err, buzz) => {
        if (err) {
            res.send(err);
        }
        else
            res.send(buzz);
    });

}