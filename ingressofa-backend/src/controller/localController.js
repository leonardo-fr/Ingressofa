const localDao = require('./../dao/localDao')

module.exports = {
    addLocal: (req, res) => {
        localDao.addLocal(req.body)
        res.status(200).send()
    }
}