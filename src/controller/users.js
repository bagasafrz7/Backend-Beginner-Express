const bcrypt = require('bcrypt')
const helper = require('../helper/index')
const { postUser, cekUser, getUserById, getAllUser, getUserCount, patchUser, deleteUser } = require('../model/users')
const jwt = require('jsonwebtoken')
const { response, request } = require('express')
const qs = require('querystring')

const getPrevLink = (page, currentQuery) => {
    if (page > 1) {
        const generatedPage = {
            page: page - 1
        }
        const resultPrevLink = { ...currentQuery, ...generatedPage }
        return qs.stringify(resultPrevLink)
    } else {
        return null
    }
}

const getNextLink = (page, totalPage, currentQuery) => {
    if (page < totalPage) {
        const generatedPage = {
            page: page + 1
        }
        const resultNextLink = { ...currentQuery, ...generatedPage }
        return qs.stringify(resultNextLink)
    } else {
        return null
    }
}

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
    getUser: async (request, response) => {
        let { page, limit, sort } = request.query

        if (page === undefined || page === '') {
            page = 1
        } else {
            page = parseInt(page)
        }

        if (limit === undefined || limit === '') {
            limit = 20
        } else {
            limit = parseInt(limit)
        }

        if (sort === undefined || sort === '') {
            sort = 'user_id'
        }

        let totalData = await getUserCount();
        let totalPage = Math.ceil(totalData / limit)
        let offSide = page * limit - limit
        let prevLink = getPrevLink(page, request.query)
        let nextLink = getNextLink(page, totalPage, request.query)
        const pageInfo = {
            page,
            totalPage,
            limit,
            totalData,
            prevLink: prevLink && `http://127.0.0.1:3001/user?${prevLink}`, nextLink: nextLink && `http://127.0.0.1:3001/user?${nextLink}`
        }

        try {
            const result = await getAllUser(sort, limit, offSide)
            if (result.length > 0) {
                const newData = {
                    result,
                    pageInfo
                }
                // client.setex(`getuser:${JSON.stringify(request.query)}`, 3600, JSON.stringify(newData))
                return helper.response(response, 200, "Success Get User", result, pageInfo)
            } else {
                return helper.response(response, 404, "User Not Foud", result, pageInfo)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
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
    },
    deleteUser: async (request, response) => {
        try {
            const { id } = request.params
            const checkId = await getUserById(id)
            if (checkId.length > 0) {
                const result = await deleteUser(id)
                return helper.response(response, 201, "User Deleted", result)
            } else {
                return helper.response(response, 400, `User By Id: ${id} Not Foud`)
            }
        } catch (error) {
            return helper.response(response, 400, "Bad Request", error)
        }
    }
}