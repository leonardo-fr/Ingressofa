const eventDao = require('./../database/eventDao')

module.exports = {
    addEvent: async req => {
        try {
            await eventDao.addEvent(req)
        } catch (error) {
            throw 'O evento contém informações inválidas.'
        }
    }
}