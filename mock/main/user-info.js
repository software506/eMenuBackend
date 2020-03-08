// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data": {
      "userId":  Random.id(),
      "openId": Random.id(),
      "unionId": Random.id(),
      "headImg": Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
      "nickName": Random.cname(),
      "mobile": /\d{11}/,
    },
})
module.exports = data;