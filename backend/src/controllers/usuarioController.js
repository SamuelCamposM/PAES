import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Request from "../models/Request";

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

    newUser._id = mongoose.Types.ObjectId();
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
        console.log(token);
        res.json({ token });
      }
    );
  } catch (error) {
    res.json({ msg: "error al crear usuario" });
  }
};

export const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;

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
    res.status(401).json({ msg: "error al crear usuario" });
  }
};

export const autenticarUsuario = async (req, res) => {
  try {
    const _id = req.usuario.id;
    const usuario = await Usuario.findOne({ _id }).select("-password");
    res.json({ usuario });
  } catch (error) {
    res.json({ msg: "hubo un error" });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-password");

    res.json({ usuarios });
  } catch (error) {
    res.json({ msg: "hubo un error al obtener usuarios" });
  }
};

export const addFriend = async (req, res) => {
  try {
    const { idReceptor, idEmisor, _id } = req.body;
    let user = await Usuario.findOne(
      { _id: idEmisor },
      { amigos: idReceptor },
      { "amigos.$": false }
    );

    let resultado = await user.amigos.some((amigo) => amigo === idReceptor);

    if (resultado) {
      return res.status(401).json({ msg: "usuario ya agregado" });
    }
    //agregando como amigo al usuario seleccionado
    await Usuario.update({ _id: idEmisor }, { $push: { amigos: idReceptor } });
    //agregandome como amigo del usuario seleccionado
    await Usuario.update({ _id: idReceptor }, { $push: { amigos: idEmisor } });
    //devolviendo amigos actualizados
    user = await Usuario.findOne(
      { _id: idReceptor },
      { amigos: idEmisor },
      { "amigos.$": false }
    );

    await Request.findOneAndDelete({ _id });

    res.status(200).json({ amigos: user.amigos });
  } catch (error) {
    res.status(402).json({ msg: "Hubo un al enviar aceptar la solicitud" });
  }
};

export const gettingRequest = async (req, res) => {
  try {
    const { idReceptor, nombreEmisor, idEmisor, imagenEmisor } = req.body;
    console.log("idEmisor", idEmisor, "idReceptor", idReceptor);
    let solicitudes = await Request.find(
      { idReceptor },
      { idEmisor, idReceptor }
    );
let existe = solicitudes.some(solicitud => solicitud.idEmisor === idEmisor )

if (existe ) {
  return res.status(401).json({msg:"solicitud ya enviada"})
}
     solicitudes = new Request({idReceptor, nombreEmisor, idEmisor, imagenEmisor })

    console.log("solicitud", solicitudes);
    // await solicitud.save()
    solicitudes.save()
    res.json({ solicitudes});
  } catch (error) {
    res.status(401).json({ msg: "Error al enviar la solicitud" });
  }
};

export const getSolicitudes = async (req, res) => {
  try {
    const { idReceptor } = req.body;

    const solicitudes = await Request.find({ idReceptor });

    res.json({ solicitudes });
  } catch (error) {
    res
      .status(402)
      .json({ msg: "Hubo un error al cargar las solicitudes de amistad" });
  }
};

export const deleteSolicitudes = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(req.body);
    const solicitud = await Request.findOneAndDelete({ _id });

    res.json({ solicitud });
  } catch (error) {
    res.status(402).json({ msg: "Hubo un error con la solicitud de amistad" });
  }
};

export const deleteFriend = async (req, res ) => {
try {
  const { idReceptor, idEmisor } = req.body;
  console.log("idEmisor", idEmisor, "idReceptor", idReceptor);
 await Usuario.update({ _id: idEmisor }, { $pull: { amigos: idReceptor } });
await Usuario.update({ _id:  idReceptor }, { $pull: { amigos:idEmisor } });

  res.json({idReceptor})
} catch (error) {
  res.status(402).json({ msg: "Hubo un error al eliminar amigo" });
}

}
