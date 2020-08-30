const connection = require('../config/mysql')

module.exports = {
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM histories`, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
                // console.log(error)
            })
        })
    },
    getHistoryById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM histories WHERE history_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistoryDays: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT SUM(history_subtotal) as totalToday FROM histories WHERE DAY(history_created_at) = DAY(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistoryWeek: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT COUNT(*) as Orders FROM histories WHERE YEARWEEK(history_created_at) = YEARWEEK(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getHistoryYears: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT SUM(history_subtotal) as totalYears FROM histories WHERE YEAR(history_created_at) = YEAR(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getOrdersDays: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT histories.history_id, histories.history_invoice, histories.history_created_at, orders.order_id, product.product_name, histories.history_subtotal FROM histories JOIN orders ON histories.history_id = orders.history_id JOIN product ON orders.product_id=product.product_id WHERE DAY(history_created_at) = DAY(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getOrdersWeek: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT histories.history_id, histories.history_invoice, histories.history_created_at, orders.order_id, product.product_name, histories.history_subtotal FROM histories JOIN orders ON histories.history_id = orders.history_id JOIN product ON orders.product_id=product.product_id WHERE WEEK(history_created_at) = WEEK(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    GetOrdersMonth: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT histories.history_id, histories.history_invoice, histories.history_created_at, orders.order_id, product.product_name, histories.history_subtotal FROM histories JOIN orders ON histories.history_id = orders.history_id JOIN product ON orders.product_id=product.product_id WHERE MONTH(history_created_at) = MONTH(NOW())", (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    postHistory: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO histories set ?", setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        history_id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    patchHistory: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE histories set ? WHERE history_id = ?", [setData, id], (error, result) => {
                if (!error) {
                    const newResult = {
                        history_id: id,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}