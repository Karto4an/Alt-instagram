const db = require('../db.js')
const bcrypt = require('bcrypt')

class AuthController {

    async getSessionToken(req, res) {
        const {username, pswd} = req.body
        if (username == null || pswd == null) {
            return res.status(400).send('Blank!')
        }
        try {
            const userToAuth = await db.query(`SELECT pswd FROM user_data WHERE username=$1`, [username])
            console.log(userToAuth.rows[0].pswd)
            if (await bcrypt.compare(pswd, userToAuth.rows[0].pswd)) {
                res.send('Success')
            } else {
                res.send('Not Allowed!')
            }
            res.status(200).send()
        } catch {
            res.status(500).send()
        }
    }


    async removeSessionToken(req, res) {
        res.end('test')
    }
}

module.exports = new AuthController()
