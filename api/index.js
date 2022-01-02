const app = require('express')();

app.get('/api', (req, res) => {
  res.end(`This is a dummy API endpoint.`);
});

module.exports = app;