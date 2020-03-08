// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data": {
        "hotGoods": [],
        "hotCategoryAndGoodsResp": {
          "items": []
        }
      },
})
module.exports = data;