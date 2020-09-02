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
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    getProductRedis: (request, response, next) => {
        client.get(`getproduct:${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                console.log('Data ada didalam redis')
                return helper.response(response, 200, JSON.parse(result))
            } else {
                console.log('Data tidak ada didalam redis')
                next()
            }
        })
    },
    getSearchProductRedis: (request, response, next) => {
        client.get(`getsearchproduct: ${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
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
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
        })
    },
    getSearchCategoryRedis: (request, response, next) => {
        client.get(`getsearchcategory: ${JSON.stringify(request.query)}`, (error, result) => {
            if (!error && result != null) {
                return helper.response(response, 200, JSON.parse(result))
            } else {
                next()
            }
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
    clearDataRedis: (request, response, next) => {
        client.flushall((error, result) => {
            console.log(result)
        })
        next()
    }
}