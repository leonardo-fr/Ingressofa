const eventService = require('./../services/eventService')

module.exports = {
    addEvent: (req, res) => {
        eventService.addEvent(req.body)
            .then(() => 
                res.status(201).send()
            )
            .catch(error =>
                res.status(400).send({error})
            )
    }
}