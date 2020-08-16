const { getAllOrder, postOrder } = require('../model/order')
const { postHistory } = require('../model/history')
const helper = require('../helper/index.js');
const { response } = require('express');

module.exports = {
    getAllOrder: async (request, response) => {
        try {
            const result = await getAllOrder();
            return helper.response(response, 200, "Success Get Order", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    postOrder: async (request, response) => {
        try {
            const setData = {
                history_invoice: (Math.floor(Math.random() * 10000) + 10000),
                history_subtotal: 0,
                history_created_at: new Date()
            }
            const result = await postHistory(setData)
            const newDataId = result.history_id
            const dataRaw = request.body.orders
            const newDataRaw = dataRaw.map((value, index) => {
                const setDataOrder = {
                    history_id: newDataId,
                    product_id: value.product_id,
                    order_qty: value.order_qty,
                    order_price: value.order_price
                }
                const result = postOrder(setDataOrder)
                return helper.response(response, 201, "Order Created".result)
            })

        } catch (error) {
            // return helper.response(response, 400, "Bad Request", error)
            console.log(error)
        }
    }
}