const { io } = require(".");

io.on("connection", (socket) => {
  /* … */
  console.log(socket.id);
});
