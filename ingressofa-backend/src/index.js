const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const dao = require('./dao/userDao')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret'
}))
app.use(express.json())

app.post('/user', (req, res) => {
    dao.addUser(req.body)
    res.send()
})

app.post('/login', async (req, res) => {
    const password = await dao.getPassword(req.body.login)

    bcrypt.compare(req.body.password, password['ds_senha'], (err, match) => {
        if (match) {
            req.session.user = req.body.login
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    })
})

app.listen(port)