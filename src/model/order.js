const connection = require('../config/mysql')

module.exports = {
    getAllOrder: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM orders`, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
                // console.log(result)
                // console.log(error)
            })
        })
    },
    postOrder: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO orders set ?", setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        orders_id: result.insertId,
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