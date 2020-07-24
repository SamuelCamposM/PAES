import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import multer from "multer"
import path from "path"
mongoose.set('useCreateIndex', true);
//conectar a la base de datos
import "./config/database";
import passport from "passport"
import morgan from "morgan"
const app = express();
//middlewares
app.use(cors())
app.use(passport.initialize())
app.use(morgan('dev'))
app.use(express.json({extended : true }))


app.use(multer({dest: path.join(__dirname,"public/img/uploads") }).single('image'))
//routes
app.use('/usuarios', require('./routes/usuarios'))
app.use('/', require('./routes/google'))
app.use('/imagen', require('./routes/imagen'))

app.use(express.static('public'))
let port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server on port ${port}`));
