const db = require('../db.js')

class PostController {

    async createPost(req, res) {
        const {author_id, image_url} = req.body
        const newPost = await db.query(`INSERT INTO post () values ($1, $2) RETURNING *`, [])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const {id} = req.params.id
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id])
        res.json(posts.rows)
    }

    async testPosts(req, res) {

    }
}

module.exports = new PostController()
