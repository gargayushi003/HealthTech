const mongoose = require('mongoose');
// it will be required from same instance

const doctorSchema = new mongoose.Schema({
    // doctorName:{
    //   type:String
    //  // required:true
    // },
    // doctorUID:{
    //     type:String
    //    // required:true
    // },
    // specialization:{
    //     type:String
    //    // required:true
    // },
    // startofDay:{
    //     type:String
    //    // required:true
    // },
    // endofDay:{
    //     type:String
    //    // required:true
    // },
    // holiday:{
    //     type:String
    //    // required:true
    // },
    // avialable:{
    //     type:String
    //    // required:true
    // }
    doctorUID: {
        type: Number,
        required: true,
        unique: true
    },
    doctorName: {
        type: String,
        required: true,
        minlength: 3
    },
    specialization: {
        type: String,
        required: true
    },
    working_hours: {
        type: String,
        required: true,
    },
    appoint_hours: {
        type: String,
        required: true,
    },
    holiday: {
        type: String,
        required: true
    }
});

const Doctor = mongoose.model('doctor', doctorSchema);
module.exports = Doctor;