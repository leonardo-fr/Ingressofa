const db = require('./connection')

module.exports = {
    addLocal: local => db.query(
        'INSERT INTO "Local" ("Name", "Capacity") VALUES ($1, $2)',
        [local.name, local.capacity]
    )
}