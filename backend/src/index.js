import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
mongoose.set("useCreateIndex", true);
//conectar a la base de datos
import "./config/database";
import passport from "passport";
import morgan from "morgan";
const app = express();
//middlewares
app.use(cors());
app.use(passport.initialize());
app.use(morgan("dev"));
app.use(express.json({ extended: true }));

const storage = multer.diskStorage({
  destination: path.join(__dirname, "./public/images"),
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");
//routes
app.use("/usuarios", require("./routes/usuarios"));
app.use("/", require("./routes/google"));
app.use("/imagen", require("./routes/imagen"));

app.use(express.static("public"));
let port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server on port ${port}`));
