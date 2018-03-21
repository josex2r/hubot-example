const callAPI = require('../lib/call-api');

console.log()

module.exports = (robot) => {
  const adapter = robot.adapterName;
  const formatter = require(`../lib/formatters/${adapter}`);

  robot.respond(/lista de pel[ií]culas/i, (res) => {
    callAPI(robot, 'films').then((data) => {
      const message = formatter.formatFilms(data);

      res.send(message);
    }, (error) => {
      res.reply(`Ha habido un error: ${error.message}`);
    });
  });

};
