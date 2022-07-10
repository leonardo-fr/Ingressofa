const eventDao = require('./../database/eventDao')

module.exports = {
    addEvent: (req, res) => {
        eventDao.addEvent(req.body)
        res.status(200).send()
    }
}