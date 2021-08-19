const db = require('../db.js')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

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
                // res.send('Success')
                const user = {username: username, pswd: pswd}
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                res.json({accessToken: accessToken})

            } else {
                res.send('Not Allowed!')
            }
            res.status(200).send()
        } catch {
            res.status(500).send()
        }
    }

    async checkSessionToken(req, res) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
        })
    }

    async removeSessionToken(req, res) {
        res.end('test')
    }
}

module.exports = new AuthController()
