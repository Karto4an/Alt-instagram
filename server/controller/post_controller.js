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
        res.json({
            "profile_pic_url": "img/profilepic.webp",
            "username": "Karto4an",
            "img_url": "img/test-pic.webp",
            "likes_num": "1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae aliquid facilis aut, praesentium tempore sequi quasi inventore commodi, nostrum vel, quo debitis impedit voluptatem? Quos dolorum quisquam recusandae qui?"
        })
    }
}

module.exports = new PostController()
