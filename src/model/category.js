const connection = require('../config/mysql')

module.exports = {
    getAllCategory: (sort, limit, offSide) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category ORDER BY ${sort} LIMIT ? OFFSET ?`, [limit, offSide], (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getCategoryByName: (search, limit) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM category WHERE category_name LIKE ? LIMIT ?`, [`%${search}%`, limit], (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    getCategoryCount: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT COUNT(*) as total FROM category", (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getCategoryCountByName: (search) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) as total FROM category WHERE category_name LIKE ?', `%${search}`, (error, result) => {
                !error ? resolve(result[0].total) : reject(new Error(error))
            })
        })
    },
    getCategoryById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM category WHERE category_id = ?", id, (error, result) => {
                !error ? resolve(result) : reject(new Error(error))
            })
        })
    },
    postCategory: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category set ?", setData, (error, result) => {
                if (!error) {
                    const newResult = {
                        category_id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    patchCategory: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE category SET ? WHERE category_id = ?", [setData, id], (error, result) => {
                if (!error) {
                    const newResult = {
                        category_id: id,
                        ...setData
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    deleteCategory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category where category_id = ?", id, (error, result) => {
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