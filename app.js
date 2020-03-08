const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const port = process.env.ORIGIN_HOST_PROT
const host = process.env.ORIGIN_HOST
var https = require('https')
var http = require('http')

app.get('/', (req, res) => res.send('Hello World!'))

// 验证是否登陆
app.post('/main', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/main/main')));
})

// 验证token
app.post('/gateway/auth/oauth/token', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/main/oauth-token')));
})

// 获取个人信息
app.post('/gateway/auth/login/getUserInfo', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/main/user-info')));
})

// 查看地址
app.post('/account/addresses', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/account/addresses')));
})

// 查看省份
app.post('/area/provinces', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/account/provinces')));
})

// 查看市
app.post('/area/cities', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/account/cities')));
})

// 查看区/县
app.post('/area/counties', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/account/counties')));
})

// 查看村
app.post('/area/towns', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/account/towns')));
})

// 查看订单
app.post('/order/list', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/order/list')));
})

// 查看是否可以退货
app.post('/after/getCustomerExpectComp', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/order/customer-expect-comp')));
})

// 查看物流信息
app.post('/order/orderTrack', (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.send(JSON.stringify(require('./mock/order/order-track')));
})

http.createServer(app).listen(port, host, () => console.log(`http app listening on port http://${host}:${port}!`))