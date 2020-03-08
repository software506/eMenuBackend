define({ "api": [
  {
    "type": "post",
    "url": "/account/addresses",
    "title": "我的地址",
    "group": "Account",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n    {\n      \"id\": \"\",\n      \"name\": \"\",\n      \"mobile\": \"\",\n      \"isDefault\": \"\", // 1|0\n      \"provinceName\": \"\",\n      \"cityName\": \"\",\n      \"countyName\": \"\",\n      \"detailAddress\": \"\",\n      \"txtStyle\": \"\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/user/addresses.js",
    "groupTitle": "Account",
    "name": "PostAccountAddresses"
  },
  {
    "type": "post",
    "url": "/area/cities",
    "title": "城市",
    "group": "Address",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"province\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n    {\n      \"areaName\": \"\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/user/addresses.js",
    "groupTitle": "Address",
    "name": "PostAreaCities"
  },
  {
    "type": "post",
    "url": "/area/counties",
    "title": "区域/县",
    "group": "Address",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"city\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n    {\n      \"areaName\": \"\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/user/addresses.js",
    "groupTitle": "Address",
    "name": "PostAreaCounties"
  },
  {
    "type": "post",
    "url": "/area/provinces",
    "title": "省份",
    "group": "Address",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n    {\n      \"areaName\": \"\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/user/addresses.js",
    "groupTitle": "Address",
    "name": "PostAreaProvinces"
  },
  {
    "type": "post",
    "url": "/area/towns",
    "title": "村",
    "group": "Address",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"city\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\":[\n    {\n      \"areaName\": \"\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/user/addresses.js",
    "groupTitle": "Address",
    "name": "PostAreaTowns"
  },
  {
    "type": "post",
    "url": "/after/getCustomerExpectComp",
    "title": "查看是否可以退货",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"orderId\": \"\", //\n  \"wzOrderId\": \"\", //\n  \"skuId\": \"\" //\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": \"\" // true|false",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/order/customer-expect-comp.js",
    "groupTitle": "Order",
    "name": "PostAfterGetcustomerexpectcomp"
  },
  {
    "type": "post",
    "url": "/order/list",
    "title": "查看订单列表",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"page\": \"\", // 当前页数\n  \"type\": \"\", // 搜索类型 all, unpay, wait, finish\n  \"userId\": \"\" //用户Id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"orders\": [\n      {\n        \"order\": {\n          \"orderId\": \"\",\n          \"createdTime\": \"\",\n          \"status\": \"\", // 未支付\n          \"nbAmount\": \"\", // 应付\n          \"freightAmount\": \"\", // 运费\n        },\n        \"orderExtRespList\": [\n          {\n            \"name\": \"\", // 商品名\n            \"goodsImg\": \"\", // 商品图\n            \"saleValue\": \"\", // 商品描述\n            \"nbPrice\": \"\" // 商品价格\n          }\n        ],\n        \"address\": {\n          \"name\": \"\",\n          \"mobile\": \"\",\n          \"provinceName\": \"\",\n          \"cityName\": \"\",\n          \"countyName\": \"\",\n          \"detailAddress\": \"\"\n        }\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/order/order-list.js",
    "groupTitle": "Order",
    "name": "PostOrderList"
  },
  {
    "type": "post",
    "url": "/order/orderTrack",
    "title": "查看物流信息",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"orderId\": \"\",\n  \"userId\": \"\" // 用户Id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"trackNo\": \"\",\n    \"orderTracks\": [\n      {\n        \"skuTracks\": [\n          {\n            \"content\": \"\",\n            \"msgTime\": \"\"\n          }\n        ],\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/order/order-track.js",
    "groupTitle": "Order",
    "name": "PostOrderOrdertrack"
  },
  {
    "type": "post",
    "url": "/pay/applyPay",
    "title": "支付订单",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"openId\": \"\",\n  \"orderId\": \"\", // 订单id\n  \"payType\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"timeStamp\": \"\",\n    \"nonceStr\": \"\",\n    \"packages\": \"\",\n    \"paySign\": \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/order/order-list.js",
    "groupTitle": "Order",
    "name": "PostPayApplypay"
  },
  {
    "type": "post",
    "url": "/login/getUserInfo",
    "title": "获取用户信息",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"userId\": \"\",\n    \"openId\": \"\",\n    \"unionId\": \"\",\n    \"headImg\": \"\",\n    \"nickName\": \"\",\n    \"mobile\": \"\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/main/user-info.js",
    "groupTitle": "User",
    "name": "PostLoginGetuserinfo"
  },
  {
    "type": "post",
    "url": "/main",
    "title": "个人信息",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"userId\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"hotGoods\": [],\n    \"hotCategoryAndGoodsResp\": {\n      \"items\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/main/main.js",
    "groupTitle": "User",
    "name": "PostMain"
  },
  {
    "type": "post",
    "url": "/oauth/token",
    "title": "获取token",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body:",
          "content": "{\n  \"grant_type\": 'password',\n  \"authType\": \"\",\n  \"username\": \"\",\n  \"password\": \"\",\n  \"openId\": \"\",\n  \"nickName\": \"\",\n  \"mobile\": \"\",\n  \"verifyKey\": \"\",\n  \"unionId\": \"\",\n  \"source\": \"\",\n  \"encryptedData\": \"\",\n  \"iv\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"userInfo\": {\n      \"userId\": \"\",\n      \"openId\": \"\",\n      \"unionId\": \"\",\n      \"headImg\": \"\",\n      \"nickName\": \"\",\n      \"mobile\": \"\",\n    },\n    \"access_token\": \"\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apiDoc/main/oauth-token.js",
    "groupTitle": "User",
    "name": "PostOauthToken"
  }
] });
