//mongoose ko include kar liya
const mongoose = require('mongoose');
// ab connect krenge
mongoose.connect('mongodb+srv://smartindia:hack1234@cluster0.bxircbc.mongodb.net/sih_db');
// connection ko acquire
const db = mongoose.connection;

//error check krenge
/*
db.on('error',console.error.bind(console,'error on coonecting to database mongoose'));
// agar sab kuch shi rha to print kra denge
db.once('open',function(){
    console.log('sucessfully connected to the database');
     
});*/
db.on('error', console.error.bind(console, 'Error on connecting to database mongoose'));
db.once('open', function () {
  console.log('Successfully connected to the database');
});
