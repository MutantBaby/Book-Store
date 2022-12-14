var GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

function passPort(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // }
        // );
      }
    )
  );
}

module.exports = passPort(passPort);
