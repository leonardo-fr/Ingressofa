const express = require('express')
const session = require('express-session')

const authController = require('./controllers/authController')
const eventController = require('./controllers/eventController')
const localController = require('./controllers/localController')
const sessionController = require('./controllers/sessionController')
const ticketController = require('./controllers/ticketController')
const userController = require('./controllers/userController')

const { isIntegerId } = require('./middlewares/apiMiddleware')
const { isAuthenticated } = require('./middlewares/authMiddleware')
const { isAdmin } = require('./middlewares/userMiddleware')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.json())

app.post('/login', authController.login)

app.post('/event', isAuthenticated, isAdmin, eventController.addEvent)
app.get('/event', isAuthenticated, eventController.getEvents)
app.get('/event/:id', isAuthenticated, isIntegerId, eventController.getEventReport)

app.post('/local', isAuthenticated, isAdmin, localController.addLocal)
app.get('/local', isAuthenticated, localController.getLocals)

app.post('/session', isAuthenticated, isAdmin, sessionController.addSession)
app.get('/session', isAuthenticated, sessionController.getSessions)
app.get('/session/seats', isAuthenticated, sessionController.getSoldSeats)
app.get('/session/:id', isAuthenticated, isIntegerId, sessionController.getSessionReport)

app.post('/ticket/buy', isAuthenticated, ticketController.buyTickets)
app.post('/ticket/get', isAuthenticated, ticketController.getTicketsByProtocolAndCPF)

app.post('/user', userController.addUser)

app.listen(port)