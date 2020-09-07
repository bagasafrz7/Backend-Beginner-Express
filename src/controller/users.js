const bcrypt = require('bcrypt')
const helper = require('../helper/index')
const { postUser, cekUser, getUserById, patchUser } = require('../model/users')
const jwt = require('jsonwebtoken')
const { response, request } = require('express')

module.exports = {
    registerUser: async (request, response) => {
        const { user_email, user_password, user_name } = request.body
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        const setData = {
            user_email,
            user_password: encryptPassword,
            user_name,
            user_role: 2,
            user_status: 0,
            user_created_at: new Date()
        }
        try {
            const cekDataUser = await cekUser(user_email)
            if (user_email === '') {
                return helper.response(response, 400, "Email Cannot Be Empety")
            } else if (user_email.search('@') < 0) {
                return helper.response(response, 400, "Must be a valid email address")
            } else if (cekDataUser.length > 0) {
                return helper.response(response, 400, "Email is already registered! Please select another email")
            } else if (user_password.length < 8) {
                return helper.response(response, 400, "Password Must Be More Than 8 Characters")
            } else if (user_name === '') {
                return helper.response(response, 400, "Username Cannot Be Empety")
            } else {
                const result = await postUser(setData)
                return helper.response(response, 200, "Success Register User", result)
            }


        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    },
    loginUser: async (request, response) => {
        try {
            const { user_email, user_password } = request.body
            const cekDataUser = await cekUser(user_email)
            if (cekDataUser.length >= 1) {
                const cekPassword = bcrypt.compareSync(user_password, cekDataUser[0].user_password)
                if (cekPassword) {
                    const { user_id, user_email, user_name, user_role, user_status } = cekDataUser[0]
                    let payload = {
                        user_id,
                        user_email,
                        user_name,
                        user_role,
                        user_status
                    }
                    if (payload.user_status === 0) {
                        return helper.response(response, 400, "Your account is currently inactive! Please contact admin to activate it")
                    } else {
                        const token = jwt.sign(payload, "RAHASIA", { expiresIn: "12h" })
                        payload = { ...payload, token }
                        return helper.response(response, 200, "Success Login!", payload)
                    }
                } else {
                    return helper.response(response, 400, "Wrong Password!")
                }
            } else {
                return helper.response(response, 400, "Email / Account not registed!")
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request!")
        }

    },
    patchUser: async (request, response) => {
        try {
            const { id } = request.params
            const { user_email, user_password, user_name, user_status } = request.body

            if (user_email === '') {
                return helper.response(response, 400, "Email Cannot Be Empety")
            }

            if (user_password.length < 8) {
                return helper.response(response, 400, "Password Must Be More Than 8 Characters")
            }

            if (user_name === '') {
                return helper.response(response, 400, "Username Cannot Be Empety")
            }

            if (user_status === '') {
                return helper.response(response, 400, "User Status Cannot Be Empety")
            }

            const salt = bcrypt.genSaltSync(10)
            const encryptPassword = bcrypt.hashSync(user_password, salt)
            const setData = {
                user_email,
                user_password: encryptPassword,
                user_name,
                user_status,
                user_updated_at: new Date()
            }
            const checkId = await getUserById(id)
            if (checkId.length > 0) {
                const result = await patchUser(setData, id)
                return helper.response(response, 200, "Users Updated", result)
            } else {
                return helper.response(response, 400, `User By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}