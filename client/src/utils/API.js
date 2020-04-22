// const db = require("../../../models");
// const passport = require("./config/passport");
import axios from 'axios'
// import express from 'express'
// const app = express()


export default {



    signUp: function (userData) {
        return axios.post("/api/signup", userData)
    }

    //    signup: app.post("/api/signup", function (req, res) {
    //         db.Users.create({
    //             email: req.body.email,
    //             password: req.body.password,
    //             username: req.body.username
    //         })
    //             .then(function () {
    //                 res.redirect(307, "/");
    //             })
    //             .catch(function (err) {
    //                 res.status(401).json(err);
    //             });
    //     })












}
