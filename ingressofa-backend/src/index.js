const express = require('express')
const session = require('express-session')

const authController = require('./controller/authController')
const eventController = require('./controller/eventController')
const userController = require('./controller/userController')

const { isAuthenticated } = require('./middleware/authMiddleware')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.json())

app.post('/login', authController.login)

app.post('/event', isAuthenticated, eventController.addEvent)

app.post('/user', userController.addUser)

app.listen(port)