import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";
import bcrypt from "bcryptjs";
import mongoose, { Mongoose } from "mongoose";
//creando el usuario
export const crearUsuario = async (req, res) => {
  const { email, password, nombre } = req.body;
  console.log(req.body, process.env.SECRETA);

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({ msg: "usuario ya eiste" });
    }


    const newUser = await new Usuario({ email, nombre });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    newUser._id = mongoose.Types.ObjectId()
    await newUser.save();

    //crear y devolver jwr

    const payload = {
      usuario: {
        id: newUser._id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, //hora
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        console.log(token)
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("error creando usuario", error);
    res.json({ msg: "error al crear usuario" });
  }
};

export const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;
console.log(email, password )
  try {
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ msg: "El usuario no existe" });
    }
    const correctPassword = await bcrypt.compare(password, usuario.password);

    if (!correctPassword) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }
    //si el usuario existe crear y devolver el jwt
    const payload = {
      usuario: {
        id: usuario._id,
      },
    };
    //firmando el token

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("error iniciando sesion", error);
    res.status(401).json({ msg: "error al crear usuario" });
  }
};


export const autenticarUsuario = async (req, res) => {
 try {
  
  const _id = req.usuario.id
  const usuario = await Usuario.findOne({_id}).select('-password')
  res.json({usuario})
 } catch (error) {
    res.json({msg:"hubo un error"})
 }
}

