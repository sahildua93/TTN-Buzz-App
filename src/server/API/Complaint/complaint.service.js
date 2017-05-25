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

exports.fetchComplaint = (userId, callback) => {
console.log(userId);
    Complaint.find({creator: userId}).sort({createdAt:-1}).exec((err,complaintData) => {
        if(err){
            console.log('Error while populating complaints', err);
        }
        else{
            console.log('All complaints populated !!!');
            callback(null,complaintData);
        }
    })
};

