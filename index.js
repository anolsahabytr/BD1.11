const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let uppercaseName = name.toUpperCase();
  return res.send(uppercaseName);
});

app.get('/fullname', (req, res) => {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let fullname = `${firstname} ${lastname}`;
  return res.send(fullname);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = `${month}, ${year}`;
  return res.send(formattedDate);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greetName = `Namaste, ${name}!`;
  return res.send(greetName);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = `${street}, ${city}, ${state}`;
  return res.send(address);
});

app.get('/email', (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = `${username}${domain}`;
  return res.send(email);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
