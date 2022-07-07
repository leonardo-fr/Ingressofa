module.exports = {
    isAdmin: (req, res, next) => {
        if (req.session.user['id_tipo_usuario'] === 3) {
            next()
        } else {
            res.status(401).send()
        }
    }
}