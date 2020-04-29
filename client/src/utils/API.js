// const db = require("../../../models");
// const passport = require("./config/passport");
import axios from 'axios'
// import express from 'express'
// const app = express()


export default {



    signUp: function (userData) {
        return axios.post("/api/signup", userData)
    },

    login: function (loginData) {
        return axios.post("/api/login",loginData)
    },

    verifyLogin: function () {
        return axios.post("/api/verifylogin") 
    },

    saveSpeech: function (speechData) {
        console.log(speechData)
        return axios.post("/api/savespeech", speechData)
    },

     logOut: function () {
        return axios.get("/api/logout/")
    },












}
