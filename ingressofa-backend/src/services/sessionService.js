const sessionDao = require('./../database/sessionDao')
const ticketDao = require('./../database/ticketDao')

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
    },

    getSessionReport: async id => {
        const session = await sessionDao.getSessionDataById(id)

        if (!session) {
            throw 'Essa sessão não existe.'
        }

        const ticketsStats = await ticketDao.getTicketsStatsBySession(id)

        return { ...session, ...ticketsStats }
    }
}