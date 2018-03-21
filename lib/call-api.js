module.exports = function callAPI(robot, endpoint, data) {
  const url = `https://ghibliapi.herokuapp.com/${endpoint}`;

  return new Promise((resolve, reject) => {
    robot
      .http(url)
      .header('Content-Type', 'application/json')
      .get(data)((error, res, body) => {
        if (error) {
          reject(err);
        } if (res.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(res.statusCode));
        }
      });
  });
};
