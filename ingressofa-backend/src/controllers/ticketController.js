const ticketService = require('./../services/ticketService')

module.exports = {
    buyTickets: (req, res) => {
        ticketService.buyTickets(req.body)
            .then(sale =>
                res.status(201).send(sale)
            )
            .catch(error =>
                res.status(400).send({ error })
            )
    }
}