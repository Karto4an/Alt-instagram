require('dotenv').config()
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express')
const userRouter = require('./routes/user_routes.js')
const postRouter = require('./routes/post_routes.js')
const authRouter = require('./routes/auth_routes.js')

const PORT = process.env.PORT || 8080

const app = express()

app.options('*', cors());
app.use(cors());

app.use(express.json())
app.use(cookieParser())
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/', authRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
