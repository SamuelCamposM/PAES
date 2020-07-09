import express from "express";
import cors from "cors"
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
//routes
app.use('/usuarios', require('./routes/usuarios'))
app.use('/', require('./routes/google'))

let port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server on port ${port}`));
