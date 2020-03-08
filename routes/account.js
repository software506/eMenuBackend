var express = require('express');
var router = express.Router();

// 查看地址
router.post('/addresses', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/account/addresses')));
})

module.exports = router;
