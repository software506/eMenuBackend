var express = require('express');
var router = express.Router();

// 查看省份
router.post('/provinces', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/account/provinces')));
})

// 查看市
router.post('/cities', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/account/cities')));
})

// 查看区/县
router.post('/counties', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/account/counties')));
})

// 查看村
router.post('/towns', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/account/towns')));
})

module.exports = router;
