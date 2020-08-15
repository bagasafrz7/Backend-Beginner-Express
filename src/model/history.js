const connection = require('../config/mysql')

module.exports = {
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM histories`, (error, result) => {
                // !error ? resolve(result) : reject(new Error(error))
                console.log(error)
            })
        })
    }
}