require("dotenv").config();
const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
const nodemailer = require  ("nodemailer");

//Console logging the email address first
console.log("email add:", process.env.EMAIL_PASSWORD);

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
        console.log(res);
        res.json(req.user);
    });

    app.post("/api/savespeech", function (req, res) {
        console.log(req.body);

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
        console.log("---verify backend:", req.user);
        res.json(req.user);
    });

    app.get("/api/logout/", function (req, res) {
        req.logout();
        res.json(true);
    });

    app.get("/api/members/:id", function (req, res) {
        console.log(req);

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
        console.log(res);

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
        console.log("post email: ", req.body);
     
        // Define message for nodemailer
        const mailOptions = req.body;
          
        // Send mail 
        transporter.sendMail(mailOptions, function (err, response) {
            if (err) {
                console.error('there was an error: ', err);
            } else {
                console.log('here is the res: ', response);
            }
              res.json(response);
            });         
    })

   
    app.post("/api/sendemailCustomer", function(req, res){
        console.log("post email: ", req.body);
     
        // Define message for nodemailer
        const mailOptions = req.body;
          
        // Send mail 
        transporter.sendMail(mailOptions, function (err, response) {
            if (err) {
                console.error('there was an error: ', err);
            } else {
                console.log('here is the res: ', response);
                res.json(response);
            }
        });         
    })

    // app.get("/api/user_data", function(req, res) {
    //     if (!req.user) {
    //         // The user is not logged in, send back an empty object
    //         res.json({});
    //     } else {
    //         // Otherwise send back the user's email and id
    //         // Sending back a password, even a hashed password, isn't a good idea
    //         res.json({
    //             username: req.user.username,
    //             email: req.user.email,
    //             id: req.user.id
    //         });
    //     }
    // });
};

