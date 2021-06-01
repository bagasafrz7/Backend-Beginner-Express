const connection = require('../config/mysql')

module.exports = {
    getDataHouse: (sort, limit, offSide) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM rumah ORDER BY ${sort} LIMIT ? OFFSET 0`, [limit, offSide], (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
                console.log(error)
            })
        })
    },
    getHouseCount: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT COUNT(*) as total FROM rumah", (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
}