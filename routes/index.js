require("dotenv").config();
const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
const nodemailer = require  ("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${ process.env.EMAIL_ADDRESS }`,
    pass: `${ process.env.EMAIL_PASSWORD }`,
  },
});

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    app.post("/api/signup", function (req, res) {
        db.Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(function () {
            res.redirect(307, "/");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
    });

    app.post("/api/login/", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    app.post("/api/savespeech", function (req, res) {

        db.SpeechesLists.create({
            speechTitle: req.body.speechTitle,
            length: req.body.length,
            analytics: req.body.analytics,
            UserId: req.body.UserId
        })
        .then(function () {
            res.redirect(307, "/");
        })
        .catch(function (err) {
            res.json(err);
        });
    });

    app.post("/api/verifyLogin/", function(req, res) {
        res.json(req.user);
    });

    app.get("/api/logout/", function (req, res) {
        req.logout();
        res.json(true);
    });

    app.get("/api/members/:id", function (req, res) {
        db.SpeechesLists.findAll({
            where:{
                userId: req.params.id
            }
        }).then(Users => {
            res.json(Users);
        })
        .catch(function (err) {
            res.json(err.data + " not working")
        });
    })

    app.delete("/api/delete/:id", function (req, res) {
        db.SpeechesLists.destroy({
            where:{
                id: req.params.id     
            } 
        }).then(Users => {
            res.json(Users);
        })
        .catch(function (err) {
            res.json(err + " not working");
        });
    })

    app.post("/api/sendemail", function(req, res){     
        // Define message for nodemailer
        const mailOptions = req.body;
          
        // Send mail 
        transporter.sendMail(mailOptions, function (err, response) {
            if (err) {
                console.error('There was an error: ', err);
            } else {
                console.log('This is the res: ', response);
            }
              res.json(response);
            });         
    })

   
    app.post("/api/sendemailCustomer", function(req, res){     
        // Define message for nodemailer
        const mailOptions = req.body;
          
        // Send mail 
        transporter.sendMail(mailOptions, function (err, response) {
            if (err) {
                console.error('There was an error: ', err);
            } else {
                console.log('Here is the res: ', response);
                res.json(response);
            }
        });         
    })
};

