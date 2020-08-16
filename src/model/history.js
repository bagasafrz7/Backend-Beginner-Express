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
    // getPriceProduct: () => {
    //     return new Promise((resolve, reject) => {
    //         connection.query("SELECT order_qty, order_price FROM orders WHERE history_id = ?", id, (error, result) => {
    //             !error ? resolve(result) : reject(new Error(error))
    //         })
    //     })
    // }
}