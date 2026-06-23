const express = require('express');

const mainRouter = require('./routes');

const app = express();

app.set("view engine", "ejs");

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/');
});
