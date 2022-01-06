const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.end(`This is a dummy API endpoint.`);
});

module.exports = app;