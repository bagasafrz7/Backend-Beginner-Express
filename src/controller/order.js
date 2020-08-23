const { getAllOrder, postOrder } = require('../model/order')
const { postHistory, patchHistory } = require('../model/history')
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
            // const resultNone = []
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
            // console.log(newDataRaw[setDataOrder])
            // console.log(subTotal)
            // const subTotal = newDataRaw.order_price
            const taxable = subTotal * 10 / 100
            const afterTaxable = subTotal + taxable
            const setCheckout = {
                history_id: newDataId,
                history_subtotal: afterTaxable,
                history_updated_at: new Date()
            }
            console.log(setCheckout)
            const resultCheckout = await patchHistory(setCheckout, newDataId)
            return helper.response(response, 201, "Order Created", resultCheckout)

        } catch (error) {
            // return helper.response(response, 400, "Bad Request", error)
            console.log(error)
        }
    }
}