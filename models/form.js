const mongoose=require('mongoose');
// it will be required from same instance

const adminSchema=new mongoose.Schema({
    patientName:{
      type:String
     // required:true
    },
    patientAge:{
        type:String
       // required:true
    },
    gender:{
        type:String
       // required:true
    },
    contactInfo:{
        type:String
       // required:true
    },
    address:{
        type:String
       // required:true
    },
    medicalHistory:{
        type:String
       // required:true
    },
    preferredDoctor:{
        type:String
       // required:true
    }

});
const Admin=mongoose.model('admin',adminSchema);
module.exports=Admin;