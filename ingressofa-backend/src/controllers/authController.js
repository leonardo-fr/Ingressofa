const authService = require('./../services/authService')

module.exports = {
    login: async (req, res) => {
        try {
            const user = await authService.login(req.body)

            req.session.user = user

            res.status(200).send()
        } catch (error) {
            res.status(400).send({error})
        }
    }
}