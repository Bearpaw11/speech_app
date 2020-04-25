const path = require("path");
const db = require("../models");
const passport = require("../config/passport");
// const apiRoute = require("./api-routes")


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
        console.log(res)
        res.json(req.user);
    });

    app.post("/api/savespeech", function (req, res) {
        db.SpeechesLists.create({
            speechTitle: req.body.username,
            length: req.body.length,
            analytics: req.body.analytics,
            userId: req.body.userId
        })
            .then(function () {
                res.redirect(307, "/");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    

    app.post("/api/verifyLogin/", function(req, res) {
        console.log("---verify backend:", req.user)
        res.json(req.user);
    });

    // app.get("/logout/", function (req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });

    


    

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

