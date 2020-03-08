var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/main/main')));
});

module.exports = router;
