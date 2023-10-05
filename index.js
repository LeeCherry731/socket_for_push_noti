const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  /* … */
  console.log(socket.id);
  io.emit("test", "testing");

  socket.on("msg", (data) => {
    console.log(data);
    io.emit("noti", { title: data.title, message: data.message });
  });

  socket.on("disconnect", (reason) => {
    // ...
    console.log(reason);
    console.log(socket.rooms);
    console.log(socket.sids);
  });
});
// io.on("msg", (data) => {
//   console.log(data);
//   // io.emit("noti", { title: data.title, message: data.message });
// });
app.get("/", (req, res) => {
  console.log(req);
  res.send("Ok");
});

// setInterval(() => {
//   io.emit("test", "testing");
// }, 2000);
// setInterval(() => {
//   io.emit("noti", "testing");
// }, 10000);

server.listen(3000);
