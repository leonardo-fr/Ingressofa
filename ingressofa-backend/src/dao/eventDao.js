const db = require('./connection')

module.exports = {
    addEvent: newEvent => db.query(
        'INSERT INTO "Event" ("Name", "Type") VALUES ($1, $2)',
        [newEvent.name, newEvent.type]
    )
}