const ticketService = require('./../services/ticketService')

module.exports = {
    buyTickets: (req, res) => {
        ticketService.buyTickets(req.body)
            .then(() =>
                res.status(201).send()
            )
            .catch(error =>
                res.status(400).send({ error })
            )
    }
}