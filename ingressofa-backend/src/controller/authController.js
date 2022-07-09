const bcrypt = require('bcrypt')
const userDao = require('./../dao/userDao')

module.exports = {
    login: async (req, res) => {
        const user = await userDao.getUserByLogin(req.body.login)
    
        bcrypt.compare(req.body.password, user['Password'], (err, match) => {
            if (match) {
                req.session.user = user
                res.status(200).send()
            } else {
                res.status(401).send()
            }
        })
    }
}