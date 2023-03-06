var express = require('express');
var router = express.Router();

let users = [
  {id:1, username: "Simon", password: "12345"},
  {id:2, username: "Anna", password: "11111"},
  {id:3, username: "Camilla", password: "00000"},
  {id:4, username: "Josef", password: "myPassword"}
];

/* GET users listing */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
