const db = require('./connection')

module.exports = {
    addUser: user => db.query(
        'INSERT INTO "User" ("Name", "CPF", "Gender", "Email", "PhoneNumber", "Login", "Password", "Birthdate", "Type") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [user.name, user.cpf, user.gender, user.email, user.phoneNumber, user.email, user.password, user.birthdate, user.type]
    ),

    getUserByLogin: login => db.oneOrNone(
        'SELECT * FROM "User" WHERE "Login" = $1',
        [login]
    )
}