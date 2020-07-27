import SocketIO from "socket.io";
import Salas from "./models/Salas";

export function socketFunction(server) {
  const io = SocketIO.listen(server);
  io.on("connection", (socket) => {
    socket.on("invitar", ({ invitado }) => {
        io.emit('invitando' , {invitado})
    });
  });
}
