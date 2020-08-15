const { getAllHistory } = require('../model/history')
const helper = require('../helper/index.js');
const { response } = require('express');

module.exports = {
    getAllHistory: async (request, response) => {
        try {
            const result = await getAllHistory();
            // return helper.response(response, 200, "Success Get History", result)
            console.log(result)
        } catch (error) {
            // return helper.response(response, 400, "Bad Request", error)
            console.log(result)
        }
    }
}