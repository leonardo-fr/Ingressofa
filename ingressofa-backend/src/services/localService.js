const localDao = require('./../database/localDao')

module.exports = {
    addLocal: async req => {
        try {
            await localDao.addLocal(req)
        } catch (error) {
            throw 'O local contém informações inválidas.'
        }
    }
}