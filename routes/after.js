var express = require('express');
var router = express.Router();

// 查看是否可以退货
router.post('/getCustomerExpectComp', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/order/customer-expect-comp')));
})

module.exports = router;
