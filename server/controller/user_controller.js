const db = require('../db.js')

class UserController {

    async createUser(req, res){
        try {
        const {username, email, pswd, first_name, last_name} = req.body
        console.log(username, email, pswd, first_name, last_name)
        const newUser = await db.query(`INSERT INTO user_data (username, email, pswd, first_name, last_name) values ($1, $2, $3, $4, $5) RETURNING *`, [username, email, pswd, first_name, last_name])
        res.json(newUser.rows[0])}
        catch(err) {
            res.end('Username or email already exist!')
          }
    }
    async getUser(req, res){
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
