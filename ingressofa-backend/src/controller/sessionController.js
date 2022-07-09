const sessionDao = require('./../dao/sessionDao')

module.exports = {
    addSession: (req, res) => {
        sessionDao.addSession(req.body)
            .then(() => 
                res.status(200).send()
            ).catch(() =>
                res.status(400).send({
                    error: 'A sessão contém dados inválidos.'
                })
            )
    }
}