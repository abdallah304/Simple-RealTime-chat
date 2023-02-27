const path = require('path');
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  return res.render(`${__dirname}/views/index.html`);
});

io.on('connection', socket =>{
  socket.on('send_message', data => {
    io.sockets.emit('send_message', data);
    
  })
})
server.listen(5000);
