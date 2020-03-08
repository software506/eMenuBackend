// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data": {
      "orders|1-10": [
        {
          "order": {
            "orderId|+1": Random.id(),
            "createdTime": Random.datetime(),
            "status|+1": ["未支付", "已支付"], // 未支付
            "nbAmount": Mock.mock('@natural(60, 100)'),
            "freightAmount": Random.natural(1, 10)
          },
          "orderExtRespList": [
            {
              "name": Random.word(),
              "goodsImg": Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
              "saleValue": Random.cparagraph(),
              "nbPrice": Random.natural(60, 100),
              "num": Random.natural(1, 10),
              "skuId|+1": ['红', '白', '蓝']
            }
          ],
          "address": {
            "name": Random.word(),
            "mobile": /\d{11}/,
            "provinceName": Random.province(),
            "cityName": Random.city(),
            "countyName": Random.county(),
            "detailAddress": Random.region()
          }
        }
      ]
    }
    
})
module.exports = data;