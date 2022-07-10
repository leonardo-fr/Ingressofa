const saleDao = require('./../database/saleDao')
const sessionDao = require('./../database/sessionDao')
const ticketDao = require('./../database/ticketDao')

const mapTicketsPrice = (tickets, price, saleType) => tickets.map(ticket => {
    ticket.price = price

    if (ticket.type === 2) {
        ticket.price /= 2
    }

    if (saleType === 2) {
        ticket.price *= 1.05
    }

    ticket.price = Math.round(ticket.price * 100) / 100

    return ticket
})

const getTotalValue = tickets => tickets.reduce(
    (acc, ticket) => acc + ticket.price,
    0
)

const mapTicketsData = (tickets, sale) => tickets.map(ticket => {
    ticket.session = sale.session
    ticket.sale = sale.id

    return ticket
})

module.exports = {
    buyTickets: async (req, res) => {
        const sale = req.body
        const session = await sessionDao.getSessionById(sale.session)

        sale.tickets = mapTicketsPrice(sale.tickets, session['Price'], sale.type)
        sale.totalValue = getTotalValue(sale.tickets)
        sale.date = new Date()
        sale.protocol = sale.date.getTime() % 1000000

        const id = await saleDao.addSale(sale)

        sale.id = id['Id']
        sale.tickets = mapTicketsData(sale.tickets, sale)

        sale.tickets.forEach(ticket => ticketDao.addTicket(ticket))

        res.status(200).send()
    }
}