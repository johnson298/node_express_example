module.exports = function (app, connection) {
  app.get("/users", (req, res) => {
    connection.connect();
    connection.query("SELECT * FROM users", (err, result, fileds) => {
      if (err) throw err;
      res.json(result);
      res.status(200).end();
    });

    connection.end();
  });
};
