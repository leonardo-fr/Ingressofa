const sessionService = require('./../services/sessionService')

module.exports = {
    addSession: (req, res) => {
        sessionService.addSession(req.body)
            .then(() =>
                res.status(201).send()
            )
            .catch(error =>
                res.status(400).send({ error })
            )
    },

    getSessions: (req, res) => {
        sessionService.getSessions()
            .then(sessions =>
                res.status(200).send(sessions)
            )
            .catch(error =>
                res.status(500).send({ error })
            )
    }
}