import { Router } from "express";
import { upload } from "../index";
import Usuario from "../models/Usuario";
import { unlinkSync } from "fs";

import token from "../middlewares/token";
import path from "path";
const router = Router();

// file upload api
router.post("/upload", token, (req, res) => {
  upload(req, res, async (err) => {
    console.log("Request file ---", req.file); //Here you get file.
    const _id = req.usuario.id;
    /*Now do where ever you want to do*/

    if (!err) {
      const { avatar } = await Usuario.findOne({ _id });
      console.log(avatar);
      if (avatar) {
        const imagen = avatar.split("/");
        console.log(imagen[5]);
        await unlinkSync(
          path.join(`${__dirname}/../public/images/${imagen[5]}`)
        );
        console.log(path.resolve(`/src/public/images/${imagen[5]}`));
      }

      const usuario = await Usuario.findOneAndUpdate(
        { _id },
        { avatar: `http://localhost:4000/imagen/image/${req.file.filename}` },
        { new: true }
      );
      return res.status(200).json({ datos: usuario.avatar });
    }
  });
});
router.get("/image/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `../public/images/${req.params.id}`));
});
module.exports = router;
