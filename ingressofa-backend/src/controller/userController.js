const bcrypt = require('bcrypt')
const userDao = require('./../dao/userDao')

module.exports = {
    addUser: async (req, res) => {
        const user = req.body
        user.login = user.email
        const userExists = await userDao.getUserByLogin(user.login)

        if (userExists) {
            res.status(401).send()
            return
        }

        const saltRounds = 10
        user.password = await bcrypt.hash(user.password, saltRounds)

        userDao.addUser(user)

        res.status(200).send()
    }
}