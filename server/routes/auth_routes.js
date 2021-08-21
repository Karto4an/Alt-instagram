const Router = require('express')
const router = new Router()
const authController = require('../controller/auth_controller.js')

router.get('/auth', authController.getSessionToken)
router.post('/auth', authController.checkSessionToken)
router.delete('/auth', authController.removeSessionToken)

module.exports = router
