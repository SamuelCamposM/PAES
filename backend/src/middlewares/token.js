import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ msg: "permiso no valido" });
  }

  try {
    const id = jwt.verify(token, process.env.SECRETA);

    
    req.usuario = id.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token no valido" });
  }
}
