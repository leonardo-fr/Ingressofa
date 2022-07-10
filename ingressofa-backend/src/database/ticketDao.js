const db = require('./connection')

module.exports = {
    addTicket: ticket => db.query(
        'INSERT INTO "Ticket" ("Price", "IdSession", "IdSale", "Type", "Seat") VALUES ($1, $2, $3, $4, $5)',
        [ticket.price, ticket.session, ticket.sale, ticket.type, ticket.seat]
    ),

    getTicketsBySession: session => db.manyOrNone(
        'SELECT * FROM "Ticket" WHERE "IdSession" = $1',
        [session]
    )
}