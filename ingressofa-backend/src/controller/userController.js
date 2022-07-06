const userDao = require('./../dao/userDao')

module.exports = {
    addUser: (req, res) => {
        userDao.addUser(req.body)
        res.send()
    }
}