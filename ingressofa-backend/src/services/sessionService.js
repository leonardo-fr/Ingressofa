const sessionDao = require('./../database/sessionDao')

module.exports = {
    addSession: async req => {
        try {
            await sessionDao.addSession(req)
        } catch (error) {
            throw 'A sessão contém informações inválidas.'
        }
    }
}