const Router = require('express')
const router = new Router()
const userController = require('../controller/user_controller.js')

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.get('/user', userController.getUsers)
router.put('/user', userController.updateUser)
router.delete('/user', userController.deleteUser)

module.exports = router
