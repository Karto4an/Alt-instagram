const Router = require('express')
const router = new Router()
const authController = require('../controller/auth_controller.js')

router.post('/auth', authController.getSessionToken)
router.delete('/auth', authController.removeSessionToken)

module.exports = router
