const db = require("./models");

// const passport = require("./config/passport");

module.exports = function (app) {


    app.post("/api/signup", function (req, res) {
        db.Users.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        })
            .then(function () {
                res.redirect(307, "/");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });



}