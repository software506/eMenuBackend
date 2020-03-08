// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data|1": true
})
module.exports = data;