const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
        usernameField: "email"
    },
    function (email, password, done) {
        // When a user tries to sign in this code runs
        db.Users.findOne({
            where: {
                email: email
            }
        }).then(function (dbUsers) {
            // If there's no user with the given email
            if (!dbUsers) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (!dbUsers.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUsers);
        });
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
