const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("client/build"));

require("./routes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
