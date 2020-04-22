const path = require("path");
const db = require("../models");

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


};

