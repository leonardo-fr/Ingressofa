const express = require('express')
const session = require('express-session')
const dao = require('./services/dao')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret'
}))
app.use(express.json())

app.post('/login', (req, res) => {
    dao.getPassword(req.body.login)
        .then(data => {
            if(req.body.password === data['ds_senha']) {
                res.status(200).send()
                req.session.logged = true
            } else {
                res.status(401).send()
            }
        })
})

app.listen(port)