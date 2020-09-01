const bcrypt = require('bcrypt')
const helper = require('../helper/index')
const { postUser, cekUser } = require('../model/users')
const jwt = require('jsonwebtoken')
const { response } = require('express')

module.exports = {
    registerUser: async (request, response) => {
        const { user_email, user_password, user_name } = request.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        // console.log('user password = ' + user_password)
        // console.log('user password Bcrypt = ' + encryptPassword)
        // Jika emailnya sama tidak bisa register
        const setData = {
            user_email,
            user_password: encryptPassword,
            user_name,
            user_role: 2,
            user_status: 0,
            user_created_at: new Date()
        }
        try {
            const result = await postUser(setData)
            return helper.response(response, 200, "Success Register User", result)
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    loginUser: async (request, response) => {
        try {
            const { user_email, user_password } = request.body
            // console.log(user_email)
            const cekDataUser = await cekUser(user_email)
            if (cekDataUser.length >= 1) {
                // proses 2
                const cekPassword = bcrypt.compareSync(user_password, cekDataUser[0].user_password)
                console.log(cekPassword)
                if (cekPassword) {
                    // proses 3 = set JWT
                    const { user_id, user_email, user_name, user_role, user_status } = cekDataUser[0]
                    let payload = {
                        user_id,
                        user_email,
                        user_name,
                        user_role,
                        user_status
                    }
                    const token = jwt.sign(payload, "RAHASIA", { expiresIn: "1h" })
                    payload = { ...payload, token }
                    return helper.response(response, 200, "Success Login!", payload)
                } else {
                    return helper.response(response, 400, "Wrong Password!")
                }
            } else {
                return helper.response(response, 400, "Email / Account not registed!")
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request!")
        }

    }
}