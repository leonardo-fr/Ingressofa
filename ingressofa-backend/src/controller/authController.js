const bcrypt = require('bcrypt')
const authDao = require('./../dao/authDao')

module.exports = {
    login: async (req, res) => {
        const password = await authDao.getPassword(req.body.login)
    
        bcrypt.compare(req.body.password, password['ds_senha'], (err, match) => {
            if (match) {
                req.session.user = req.body.login
                res.status(200).send()
            } else {
                res.status(401).send()
            }
        })
    }
}