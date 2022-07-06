const express = require('express')
const session = require('express-session')

const authController = require('./controller/authController')
const userController = require('./controller/userController')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret'
}))
app.use(express.json())

app.post('/user', userController.addUser)

app.post('/login', authController.login)

app.listen(port)