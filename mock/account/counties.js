// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data|1-10": [
      {
        "areaName": Random.province(),
      },
    ]
})
module.exports = data;