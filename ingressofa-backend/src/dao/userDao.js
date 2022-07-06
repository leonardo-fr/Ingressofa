const pgp = require('pg-promise')()
const db = pgp('postgres://postgres:postgres@localhost:5432/ingressofa')

module.exports = {
    getPassword: login => db.one(
        'SELECT ds_senha FROM tb_usuario WHERE ds_login = $1',
        [login]
    ),

    addUser: user => db.query(
        'INSERT INTO tb_usuario (ds_nome, ds_cpf, ds_sexo, ds_email, ds_telefone, ds_login, ds_senha, dt_nascimento, id_tipo_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [user['name'], user['cpf'], user['gender'], user['email'], user['phoneNumber'], user['email'], user['password'], user['birthdate'], user['type']]
    )
}