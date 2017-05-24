const mongoose = require('mongoose');
require('../../Config/datasource');

const complaintSchema = new mongoose.Schema(
    {
        creator : {
            type: String
        },
        title : {
            type: String
        },
        description : {
            type : String,
        },
        category: {
            type : String,
        },
        image : {
            type : String
        }
    }, {versionKey : false, timestamps : true}
);

module.exports = mongoose.model('Complaint', complaintSchema);