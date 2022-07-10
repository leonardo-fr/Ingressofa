const sessionDao = require('./../database/sessionDao')

module.exports = {
    addSession: async req => {
        try {
            await sessionDao.addSession(req)
        } catch (error) {
            throw 'A sessão contém informações inválidas.'
        }
    },

    getSessions: async () => {
        try {
            return sessionDao.getSessions()
        } catch (error) {
            throw 'Ocorreu um erro inesperado ao buscar as sessões.'
        }
    }
}