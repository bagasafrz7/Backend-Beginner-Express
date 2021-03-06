const { getAllHistory, getHistoryById, getHistoryDays, getHistoryWeek, getHistoryYears, getOrdersDays, getOrdersWeek, GetOrdersMonth, postHistory, getPriceProduct, patchHistory, chartModel } = require('../model/history')
const helper = require('../helper/index.js');
const { response, request } = require('express');
const { get } = require('../routes/history');
const { patchCategory } = require('../model/category');
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getAllHistory: async (request, response) => {
        try {
            const result = await getAllHistory();
            client.set(`getproduct:${JSON.stringify(request.query)}`, JSON.stringify(result))
            return helper.response(response, 200, "Success Get History", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    getHistoryById: async (request, response) => {
        try {
            const { id } = request.params
            const result = await getHistoryById(id)
            client.setex(`gethistorybyid:${id}`, 3600, JSON.stringify(result))
            if (result.length > 0) {
                return helper.response(response, 200, "Success Get History By Id", result)
            } else {
                return helper.response(response, 400, `History By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetHistoryDays: async (request, response) => {
        try {
            const result = await getHistoryDays();
            return helper.response(response, 200, "Succes Get History Per Days", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetHistoryWeek: async (request, response) => {
        try {
            const result = await getHistoryWeek();
            return helper.response(response, 200, "Succes Get History Per Week", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetHistoryYears: async (request, response) => {
        try {
            const result = await getHistoryYears();
            return helper.response(response, 200, "Succes Get History Per Years", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetOrdersDays: async (request, response) => {
        try {
            const result = await getOrdersDays();
            return helper.response(response, 200, "Succes Get Orders Per Days", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetOrdersWeek: async (request, response) => {
        try {
            const result = await getOrdersWeek();
            return helper.response(response, 200, "Succes Get Orders Per Week", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    GetOrdersMonth: async (request, response) => {
        try {
            const result = await GetOrdersMonth();
            return helper.response(response, 200, "Succes Get Orders Per Month", result)
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
    },
    getDailyMonth: async (request, response) => {
        try {
            const today = request.body.date;
            let result = []
            for (let i = 30; i >= 0; i--) {
                const d = new Date(today);
                d.setDate(d.getDate() - i);
                const date = d.toISOString().slice(0, 10);
                const income = await getDailyToday(date);
                result = [...result, { date: date, income: income }];
            }
            return helper.response(response, 200, "Success GET Data Daily Month Month", result);
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error);
        }
    },
    dataChart: async (request, response) => {
        try {
            const result = await chartModel();
            return helper.response(response, 200, "Success Get Data for Chart", result);
        } catch (error) {
            // console.log(err);
            return helper.response(response, 404, "Bad request", error);
        }
    }
}