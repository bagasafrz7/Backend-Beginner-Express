const connection = require('../config/mysql')
const { request, response } = require('express')

module.exports = {
    postUser: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    delete newResult.user_password
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    cekUser: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user_id, user_email, user_password, user_name, user_role, user_status FROM user WHERE user_email = ?', email, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    cekUserName: (userName) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user_id, user_email, user_password, user_name, user_role, user_status FROM user WHERE user_name = ?', userName, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getAllUser: (sort, limit, offSide) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user ORDER BY ${sort} LIMIT ? OFFSET ?`, [limit, offSide], (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getUserCount: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT COUNT(*) as total FROM user", (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user WHERE user_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    patchUser: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE user SET ? WHERE user_id = ?", [setData, id], (error, result) => {
                if (!error) {
                    const newResult = {
                        user_id: id,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM user where user_id = ?", id, (error, result) => {
                if (!error) {
                    const newResult = {
                        id: id
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    }
}