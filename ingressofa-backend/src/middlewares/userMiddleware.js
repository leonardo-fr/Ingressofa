module.exports = {
    isAdmin: (req, res, next) => {
        if (req.session.user['Type'] === 3) {
            next()
        } else {
            res.status(403).send({
                error: 'Usuário sem permissão.'
            })
        }
    }
}