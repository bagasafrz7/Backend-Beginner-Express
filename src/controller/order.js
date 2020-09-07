const { getAllOrder, postOrder } = require('../model/order')
const { postHistory, patchHistory } = require('../model/history')
const helper = require('../helper/index.js');
const { response } = require('express');
const qs = require('querystring')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
    getAllOrder: async (request, response) => {
        try {
            const result = await getAllOrder();
            client.set(`getorder:${JSON.stringify(request.query)}`, JSON.stringify(result))
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
            let subTotal = 0
            const newDataRaw = dataRaw.map((value, index) => {
                const setDataOrder = {
                    history_id: newDataId,
                    product_id: value.product_id,
                    order_qty: value.order_qty,
                    order_price: value.order_price * value.order_qty
                }
                const result2 = postOrder(setDataOrder)
                subTotal += setDataOrder.order_price
                return [setDataOrder]
            })
            const taxable = subTotal * 10 / 100
            const afterTaxable = subTotal + taxable
            const setCheckout = {
                history_id: newDataId,
                history_subtotal: afterTaxable,
                history_updated_at: new Date()
            }
            const resultCheckout = await patchHistory(setCheckout, newDataId)
            const setResult = { invoice: setData.history_invoice, history_id: newDataId, subTotal: afterTaxable, ppn: taxable, total: subTotal }
            return helper.response(response, 201, "Order Created", setResult)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}