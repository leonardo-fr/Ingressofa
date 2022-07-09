const db = require('./connection')

module.exports = {
    addSession: session => db.query(
        'INSERT INTO "Session" ("Date", "IdLocal", "IdEvent", "Price") VALUES ($1, $2, $3, $4)',
        [session.date, session.local, session.event, session.price]
    )
}