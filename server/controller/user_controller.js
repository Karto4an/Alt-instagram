const db = require('../db.js')

class UserController {

    async createUser(req, res){
        const {name, surname, email, username, password} = req.body
        console.log(name, surname, email, username, password)
        const newUser = await db.query(`INSERT INTO user (id, username, name, surname, email) values ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, email, username, password])
        res.json('OK')
    }
    async getUser(req, res){

    }
    async getUsers(req, res){

    }
    async updateUser(req, res){

    }
    async deleteUser(req, res){

    }
}

module.exports = new UserController()
