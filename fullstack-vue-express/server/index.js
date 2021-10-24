const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


// Middleware

app.use(bodyParser.json())
app.use(cors())


const port = process.env.PORT || 5000

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server started on port ${port}`))