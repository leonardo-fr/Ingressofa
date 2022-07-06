const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:postgres@localhost:5432/ingressofa')

module.exports = {
    getPassword: login => db.one(
        'SELECT ds_senha FROM tb_usuario WHERE ds_login = $1',
        [login]
    )
}