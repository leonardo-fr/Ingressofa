const express = require('express')
const session = require('express-session')

const app = express()
const port = 3000

app.use(session({
    secret: 'secret'
}))
app.use(express.json())

app.post('/login', (req, res) => {
    req.session.logged = true
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}.`)
})