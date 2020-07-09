import express  from  "express"
import {crearUsuario , iniciarSesion , autenticarUsuario} from "../controllers/usuarioController";
//middleware
import  token from "../middlewares/token"
const router = express.Router()

router.post('/', crearUsuario)

router.post('/login', iniciarSesion)

router.get('/auth',token , autenticarUsuario)

module.exports = router;