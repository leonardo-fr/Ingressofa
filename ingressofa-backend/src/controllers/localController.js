const localService = require('./../services/localService')

module.exports = {
    addLocal: (req, res) => {
        localService.addLocal(req.body)
            .then(() =>
                res.status(201).send()
            )
            .catch(error =>
                res.status(400).send({ error })
            )
    }
}