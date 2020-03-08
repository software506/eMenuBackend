// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

var data = Mock.mock({
    "data|1-10": [
      {
        "id": Random.id(),
        "name": Random.word(),
        "mobile": /\d{11}/,
        "isDefault|+1": [0, 1], // 1|0
        "provinceName": Random.province(),
        "cityName": Random.city(),
        "countyName": Random.county(),
        "detailAddress": Random.region(),
        "txtStyle": `color:${Random.color()}`,
      },
    ]
})
module.exports = data;