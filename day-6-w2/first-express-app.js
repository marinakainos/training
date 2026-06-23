const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Home Page ');
});

app.get('/about', (req, res) => {
  res.send('About Us Page ');
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
  console.log('Express server running at http://localhost:3000/');
});
