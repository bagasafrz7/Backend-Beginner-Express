const router = require('express').Router()
const { registerUser, loginUser, getUser, patchUser, deleteUser } = require('../controller/users')
const { authorizationAdmin, authorizationPublic } = require('../middleware/auth')

router.get('/', authorizationAdmin, getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/:id', authorizationAdmin, patchUser)
router.delete('/:id', authorizationAdmin, deleteUser)
module.exports = router