const auth_details = require('./auth_details')
var nodemailer = require('nodemailer');
var smtptransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: creds.email.mail,
    pass: creds.email.password
  }
});


var mailOptions = {
  to: 'info.educardo@gmail.com',
  subject: 'This is a test mail',
  html: '<h1>DiveSong</h1> <p>This mail has been generated by Team DiveSong<p> <img src=\'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png\'></img>'
};

mailOptions ={}
smtptransporter.sendMail(mailOptions, function(error, info){
  if (error) {
    //console.error(error)
	return error;
  } else {
    console.log('Email sent: ' + info.response);
	return info.response;
  }
});

//smtptransporter.sendMail(mailOptions);

module.exports = smtptransporter;