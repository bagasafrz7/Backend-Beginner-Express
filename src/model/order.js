const connection = require('../config/mysql')

module.exports = {
    getAllOrder: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT histories.history_id, histories.history_invoice, histories.history_created_at, orders.order_id, product.product_name, histories.history_subtotal FROM histories JOIN orders ON histories.history_id = orders.history_id JOIN product ON orders.product_id=product.product_id`, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
                // console.log(result)
                // console.log(error)
            })
        })
    },
    postOrder: (setDataOrder) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO orders set ?", setDataOrder, (error, result) => {
                if (!error) {
                    const newResult = {
                        orders_id: result.insertId,
                        ...setDataOrder
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}