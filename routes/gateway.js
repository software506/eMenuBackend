var express = require('express');
var router = express.Router();

// 验证token
router.post('/auth/oauth/token', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/main/oauth-token')));
})

// 获取个人信息
router.post('/auth/login/getUserInfo', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('../mock/main/user-info')));
})

module.exports = router;
