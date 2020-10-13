const redis = require('redis')
const client = redis.createClient()
const helper = require('../helper/index')
const { request, response } = require('express')
const { json } = require('body-parser')

module.exports = {
    getProductByIdRedis: (request, response, next) => {
        const { id } = request.params
        client.get(`getproductbyid:${id}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, "Success Get Product By Id", JSON.parse(result))
            } else {
                next()
            }
        })
    },
    getProductRedis: (request, response, next) => {
        client.get(`getproduct:${JSON.stringify(request.query)}`, (error, result) => {
            const newResult = JSON.parse(result)
            if (!error && result != null) {
                return helper.response(response, 200, "Succes Get Data Product", newResult.result, newResult.pageInfo)
            } else {
                next()
            }
        })
    },
    getSearchProductRedis: (request, response, next) => {
        client.get(`getproductsearch: ${JSON.stringify(request.query)}`, (error, result) => {
            const newResult = JSON.parse(result)
            if (!error && result != null) {
                return helper.response(response, 200, "Success Get Product By Name", newResult.result, newResult.totalPage)
            } else {
                next()
            }
        })
    },
    clearDataProduct: (request, response, next) => {
        client.keys('getproduct*', (err, keys) => {
            if (keys.length > 0) {
                keys.forEach((value) => {
                    client.del(value)
                })
            }
            next()
        })
    },
    getCategoryByIdRedis: (request, response, next) => {
        const { id } = request.params
        client.get(`getcategorybyid${id}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    getCategoryRedis: (request, response, next) => {
        client.get(`getcategory:${JSON.stringify(request.query)}`, (error, result) => {
            const newResult = JSON.parse(result)
            if (!error && result != null) {
                return helper.response(response, 200, "Success Get Category", newResult.result, newResult.pageInfo)
            } else {
                next()
            }
        })
    },
    getSearchCategoryRedis: (request, response, next) => {
        client.get(`getcategorysearch: ${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    clearDataCategory: (request, response, next) => {
        client.keys('getcategory*', (err, keys) => {
            if (keys.length > 0) {
                keys.forEach((value) => {
                    client.del(value)
                })
            }
            next()
        })
    },
    getOrderRedis: (request, response, next) => {
        client.get(`getorder:${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    clearDataOrder: (request, response, next) => {
        client.keys('getorder*', (err, keys) => {
            if (keys.length > 0) {
                keys.forEach((value) => {
                    client.del(value)
                })
            }
            next()
        })
    },
    getHistoryByIdRedis: (request, response, next) => {
        const { id } = request.params
        client.get(`gethistorybyid${id}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    getHistoryRedis: (request, response, next) => {
        client.get(`gethistory:${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    clearDataHistory: (request, response, next) => {
        client.keys('gethistory*', (err, keys) => {
            if (keys.length > 0) {
                keys.forEach((value) => {
                    client.del(value)
                })
            }
            next()
        })
    },
    getUserRedis: (request, response, next) => {
        client.get(`getuser:${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    clearDataUser: (request, response, next) => {
        client.keys('getuser*', (err, keys) => {
            if (keys.length > 0) {
                keys.forEach((value) => {
                    client.del(value)
                })
            }
            next()
        })
    },
}