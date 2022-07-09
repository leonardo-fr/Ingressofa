const db = require('./connection')

module.exports = {
    addSale: sale => db.one(
        'INSERT INTO "Sale" ("Protocol", "Value", "Date", "IdUser", "PaymentMethod", "Type") VALUES ($1, $2, CURRENT_TIMESTAMP, $3, $4, $5) RETURNING "Id"',
        ['1', sale.totalValue, sale.user, sale.paymentMethod, sale.type]
    )
}