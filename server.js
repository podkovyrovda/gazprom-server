const Server = require('socket.io'),
      Silos = require('./factory/silos'),
      keys = require('./keys');

// Генерируем данные и запускаем интервал для обновления

const silos = new Silos(8);
const data = silos.data;

// Сокет сервер

const io = new Server(5555);

function simulate() {
  data.forEach((indicator) => indicator.changeValue());
  io.emit(keys.UPDATE, data)
}

setInterval(simulate, 5000);

io.on(keys.CONNECTION, (socket) => {
  socket.on(keys.UPDATE, () => {
    io.emit(keys.UPDATE, data)
  });
});
