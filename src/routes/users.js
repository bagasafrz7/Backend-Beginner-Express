const router = require('express').Router()
const { registerUser, loginUser, patchUser } = require('../controller/users')
const { authorizationAdmin } = require('../middleware/auth')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/:id', authorizationAdmin, patchUser)
module.exports = router