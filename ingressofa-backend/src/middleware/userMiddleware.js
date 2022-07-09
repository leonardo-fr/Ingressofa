module.exports = {
    isAdmin: (req, res, next) => {
        if (req.session.user['type'] === 3) {
            next()
        } else {
            res.status(401).send()
        }
    }
}