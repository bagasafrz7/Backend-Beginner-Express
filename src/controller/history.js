const { getAllHistory, getHistoryById, postHistory, getPriceProduct, patchHistory } = require('../model/history')
const helper = require('../helper/index.js');
const { response, request } = require('express');
const { get } = require('../routes/history');
const { patchCategory } = require('../model/category');

module.exports = {
    getAllHistory: async (request, response) => {
        try {
            const result = await getAllHistory();
            return helper.response(response, 200, "Success Get History", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getHistoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getHistoryById(id)
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get History By Id", result)
            } else {
                return helper.response(response, 400, `History By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postHistory: async (request, response) => {
        try {
            const setData = {
                history_invoice: (Math.floor(Math.random() * 10000) + 10000),
                history_subtotal: 0,
                history_created_at: new Date()
            }
            const result = await postHistory(setData)
            const newDataId = result.history_id
            return helper.response(response, 201, "Category History", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    patchHistory: async (request, response) => {
        try {

            const { id } = request.params
            const { history_subtotal } = request.body
            const setData = {
                history_subtotal,
                history_updated_at: new Date()
            }
            const checkId = await getHistoryById(id)
            if (checkId.length > 0) {
                const result = await patchHistory(setData, id)
                return helper.response(response, 201, "History Updated", result)
            } else {
                return helper.response(response, 400, `Category By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}