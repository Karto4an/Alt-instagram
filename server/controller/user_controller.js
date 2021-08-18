const db = require('../db.js')
const bcrypt = require('bcrypt')

class UserController {

    async createUser(req, res){
        try {
            try {
                const {username, email, pswd, first_name, last_name} = req.body

                const salt = await bcrypt.genSalt()
                const hashedPassword = await bcrypt.hash(pswd, salt)
                console.log(hashedPassword)

                const newUser = await db.query(`INSERT INTO user_data (username, email, pswd, first_name, last_name) values ($1, $2, $3, $4, $5) RETURNING *`, [username, email, hashedPassword, first_name, last_name])
                res.json(newUser.rows[0])}
                catch(err) {
                    res.end('Username or email already exist!')
                  }
        } catch {
            res.status(500).send()
        }

    }
    async getUserById(req, res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM user_data WHERE id=$1`, [id])
        res.json(user.rows[0])
    }
    async getUsers(req, res){

    }
    async updateUser(req, res){

    }
    async deleteUser(req, res){
        try {
        const id = req.params.id
        let pswd = req.body
        let user_pswd = await db.query(`SELECT pswd FROM user_data WHERE id=$1`, [id])
        user_pswd = user_pswd.rows[0].pswd
        pswd = pswd.pswd
        console.log(pswd)
        if (pswd == user_pswd) {
            const user = await db.query(`DELETE FROM user_data WHERE id=$1`, [id])
            res.end('Deleted successfully!')
        } else {
            res.end('Wrong password!')
        }}
        catch(err) {
            res.end('Cannot find the user!')
        }
    }
}

module.exports = new UserController()
