const Complaint = require('./complaint.model');

exports.createComplaint = (complaintData, callback) => {
    Complaint.create(complaintData, (err, complaint) => {
        if (err) {
            console.log('Complaint not registered XXXXXX', err);
            callback(err);
        }
        else {
            console.log('Complaints Registered !!!!!!');
            callback(null, complaint);
        }
    })
};