// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data": {
      "trackNo": Random.id(),
        "orderTracks|1-10": [
          {
            "skuTracks|1-10": [
              {
                "content": Random.title(),
                "msgTime": Random.datetime(),
              }
            ],
          }
        ]
      },
})
module.exports = data;