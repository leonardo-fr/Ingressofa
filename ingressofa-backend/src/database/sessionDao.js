const db = require('./connection')

module.exports = {
    addSession: session => db.query(
        'INSERT INTO "Session" ("Date", "IdLocal", "IdEvent", "Price") VALUES ($1, $2, $3, $4)',
        [session.date, session.local, session.event, session.price]
    ),

    getSessionById: id => db.oneOrNone(
        'SELECT "Date", "IdLocal", "IdEvent", "Price" FROM "Session" WHERE "Id" = $1',
        [id]
    ),

    getSessions: () => db.manyOrNone(
        'SELECT s."Id", s."Date", s."Price", e."Name" "Event", e."Type", l."Name" "Local", l."Capacity" FROM "Session" s, "Event" e, "Local" l WHERE s."IdLocal" = l."Id" AND s."IdEvent" = e."Id"'
    )
}