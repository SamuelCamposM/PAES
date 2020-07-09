import  passport from "passport"
import  Google  from "passport-google-oauth"
const  GoogleStrategy = Google.OAuth2Strategy;
import User from "../models/Usuario"
const mongoose = require("mongoose");
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "sign-google",
  new GoogleStrategy(
    {
      clientID:"1036956587644-dd3dbtodorl9bg0psbi5em2pgbphk9gj.apps.googleusercontent.com",
      clientSecret: "WRxgC5t7ixAeGrQ-0yJ7NjSw",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findById(profile.id); // si el usuario no existe
      console.log(profile)
      console.log("desde controlador", user); //lo creamos
      const { _json } = profile;
      const { name, picture } = _json;
      if (user) {
        await done(null, user); 
      } else {
        let newUser = new User();
        newUser._id = profile.id;
        newUser.nombre = name;
        newUser.avatar = picture;
        await newUser.save(); //guardamos en la base de datos
        done(null, newUser); //guardamos en la base de datos
      }
    }
  )
);
