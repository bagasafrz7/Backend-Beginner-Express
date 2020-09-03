const jwt = require('jsonwebtoken')
const helper = require('../helper')

module.exports = {
    authorizationPublic: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
            // Validasi token JWT
            token = token.split(" ")[1]
            jwt.verify(token, "RAHASIA", (error, result) => {
                // console.log(error)
                if (
                    (error && error.name === "JsonWebTokenError") ||
                    (error && error.name === "TokenExpiredError")
                ) {
                    return helper.response(response, 403, error.message)
                } else {
                    // console.log(result)
                    request.token = result
                    next()
                }
            })
        } else {
            return helper.response(response, 400, "Please Login First!")
        }
    },
    authorizationAdmin: (request, response, next) => {
        let token = request.headers.authorization
        if (token) {
            // Validasi token JWT
            token = token.split(" ")[1]
            jwt.verify(token, "RAHASIA", (error, result) => {
                // console.log(error)
                if ((error && error.name === "JsonWebTokenError") || (error && error.name === "TokenExpiredError")) {
                    return helper.response(response, 403, error.message)
                } else {
                    if (result.user_role === 1) {
                        // console.log(result)
                        request.token = result
                        next()
                    } else {
                        return helper.response(response, 400, 'You cant do it!')
                    }
                }
            })
        } else {
            return helper.response(response, 400, "Please Login First!")
        }
    }
}