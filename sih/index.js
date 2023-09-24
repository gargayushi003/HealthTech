const express = require('express');
const path = require('path');
const port = 7002;
const db = require('./config/mongoose');

const Admin = require('./models/form');
const Doctor = require('./models/doctorform');
const { isBuffer } = require('util');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var adminList = [
  {
    patientName: "vishal",
    patientAge: "21",
    gender: 'Male',
    contactInfo: "7070434171",
    address: "yaduvanshi pg ",
    medicalHistory: "tooth decay",
    preferredDoctor: "DR. daksh"
  }
]


app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/patient', function (req, res) {

  res.render('patient', {
    title: 'Patient Dashboard',
    admin_list: adminList // Pass the retrieved data to the view
  });
});

app.get('/admin', async function (req, res) {
  try {
    // Retrieve all admin data from the MongoDB database
    const adminData = await Admin.find({});

    // Render the admin page and pass the retrieved data
    res.render('admin', {
      title: 'Admin Dashboard',
      admin_list: adminData // Pass the retrieved data to the view
    });
  } catch (err) {
    console.error('Error in retrieving admin data:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/doctor', async function (req, res) {
  try {
    // Retrieve all admin data from the MongoDB database
    const adminData = await Doctor.find({});

    // Render the admin page and pass the retrieved data
    res.render('doctor', {
      title: 'Doctor Dashboard',
      admin_list: adminData // Pass the retrieved data to the view
    });
  } catch (err) {
    console.error('Error in retrieving admin data:', err);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/create-admin', async function (req, res) {
  try {

    const adminList = await Admin.create({
      patientName: req.body.patientName,
      patientAge: req.body.patientAge,
      gender: req.body.gender,
      contactInfo: req.body.contactInfo,
      address: req.body.address,
      medicalHistory: req.body.medicalHistory,
      preferredDoctor: req.body.preferredDoctor
    });
    console.log('******', adminList);

    // Redirect back to the home page after form submission
    res.redirect('/');
  } catch (err) {
    console.error('Error in creating a contact:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/submit-doctor', async function (req, res) {
  try {

    const doctorList = await Doctor.create({
      doctorName: req.body.doctorName,
      doctorUID: req.body.doctorUID,
      specialization: req.body.specialization,
      working_hours: req.body.working_hours,
      appoint_hours: req.body.appoint_hours,
      holiday: req.body.holiday
    });
    console.log('******', doctorList);

    // Redirect back to the home page after form submission
    res.redirect('/');
  } catch (err) {
    console.error('Error in creating a contact:', err);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, async function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log('Yup! My Server is running on Port', port);
});
