var express = require('express');
var router = express.Router();

// 查看订单
router.post('/list', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/order/list')));
})

// 查看物流信息
router.post('/orderTrack', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/order/order-track')));
})

module.exports = router;
