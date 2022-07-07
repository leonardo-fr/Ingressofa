const db = require('./connection')

module.exports = {
    getPassword: login => db.one(
        'SELECT ds_senha FROM tb_usuario WHERE ds_login = $1',
        [login]
    )
}