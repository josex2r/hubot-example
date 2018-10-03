const callAPI = require('../lib/call-api');

console.log()

module.exports = (robot) => {
  const adapter = robot.adapterName;
  const formatter = require(`../lib/formatters/${adapter}`);

  robot.respond(/listado de peliculas/i, (res) => {
    callAPI(robot, 'films').then((data) => {
      const message = formatter.formatFilms(data);

      res.send(message);
    }, (error) => {
      res.reply(`Ha habido un error: ${error.message}`);
    });
  });

  robot.respond(/(\d) (ultimas|primeras) peliculas/i, (res) => {
    const limit = res.match[1];
    const order = res.match[2] === 'ultimas' ? -1 : 1;

    callAPI(robot, 'films').then((data) => {
      data = data.sort((a, b) => a.release_date - b.release_date);

      if (res.match[2] === 'ultimas') {
        data = data.slice(-limit);
      } else {
        data = data.slice(0, limit);
      }

      const message = formatter.formatFilms(data);

      res.send(message);
    }, (error) => {
      res.reply(`Ha habido un error: ${error.message}`);
    });
  });

  robot.respond(/detalle de la pelicula ([\w-]+)/i, (res) => {
    const id = res.match[1];

    callAPI(robot, `films/${id}`).then((data) => {
      const message = formatter.formatDetail(data);

      res.send(message);
    }, (error) => {
      res.reply(`Ha habido un error: ${error.message}`);
    });
  });

};
