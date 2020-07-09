import express from "express";
import { autenticarGoogle } from "../controllers/googleController";
import passport from "passport"
import jwt from "jsonwebtoken"
const router = express.Router();

router.get("/auth/google/callback",passport.authenticate("sign-google", {scope: ['https://www.googleapis.com/auth/plus.login']}),
function async (req, res) {
    
  if (req.user) {
    const usuario = req.user
    console.log("desde las rutas",usuario)
    const payload = {
      usuario : {
          id: usuario._id
      }
  }
  //firmar token 
  //este es el que tengo abierto
  jwt.sign(payload , process.env.SECRETA ,{
      expiresIn: 3600 //hora
  },async(err , token )=> {
      if (err) {
          throw err
      }
      console.log(token);
  
      
       res.cookie ('token', token)   
      res.redirect('http://localhost:3000/Spinner')     
  })
  } else{
    res.redirect('http://localhost:3000/')     
  }
}
);

module.exports = router;
