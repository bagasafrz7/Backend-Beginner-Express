const { getAllOrder, postOrder } = require('../model/order')
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
            const { history_id, product_id, qty, total_harga } = request.body
            const setData = {
                history_id,
                product_id,
                qty,
                total_harga,
                orders_created_at: new Date()
            }
            const result = await this.postOrder(setData)
            return helper.response(response, 201, "Order Created".result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}