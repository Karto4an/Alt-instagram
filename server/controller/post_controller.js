const db = require('../db.js')

class PostController {

    async createPost(req, res) {
        const {author_id, image_url} = req.body
        const newPost = await db.query(`INSERT INTO post () values ($1, $2) RETURNING *`, [])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const {username} = req.params.username
        const posts = await db.query(`SELECT * FROM post WHERE username = $1`, [username])
        res.json(posts.rows)
    }

    async testPosts(req, res) {
        res.json(
        {
            "post1": [{
                "profile_pic_url": "img/profilepic.webp",
                "username": "Karto4an",
                "img_url": "img/test-pic.webp",
                "likes_num": "56",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae aliquid facilis aut, praesentium tempore sequi quasi inventore commodi, nostrum vel, quo debitis impedit voluptatem? Quos dolorum quisquam recusandae qui?"
            }],
            "post2": [{
                "profile_pic_url": "img/profilepic.webp",
                "username": "Karto4an",
                "img_url": "img/test-pic.webp",
                "likes_num": "56",
                "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae aliquid facilis aut, praesentium tempore sequi quasi inventore commodi, nostrum vel, quo debitis impedit voluptatem? Quos dolorum quisquam recusandae qui?"
            }]

        })
    }
}

module.exports = new PostController()
