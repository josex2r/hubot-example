const callAPI = require('../lib/call-api');

console.log()

module.exports = (robot) => {
  const adapter = robot.adapterName;
  const formatter = require(`../lib/formatters/${adapter}`);

  robot.hear(/ayuda/i, (res) => {
    const message = formatter.formatHelp();

    res.reply(message);
  });
};
