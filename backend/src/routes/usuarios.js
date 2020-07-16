import express from "express";
import {
  crearUsuario,
  iniciarSesion,
  autenticarUsuario,
  obtenerUsuarios,
  addFriend,
  gettingRequest,
  getSolicitudes
} from "../controllers/usuarioController";
//middleware
import token from "../middlewares/token";
const router = express.Router();

router.post("/", crearUsuario);

router.post("/login", iniciarSesion);

router.get("/auth", token, autenticarUsuario);

router.get("/getUsers", token, obtenerUsuarios);

router.post("/gettigRequest", token, gettingRequest);
router.post("/addFriend", token, addFriend);
router.post("/getSolicitudes" , token , getSolicitudes)

module.exports = router;
