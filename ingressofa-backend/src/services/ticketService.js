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
    buyTickets: async req => {
        const session = await sessionDao.getSessionById(req.session)

        if (!session) {
            throw 'A sessão informada não existe.'
        }

        req.tickets = mapTicketsPrice(req.tickets, session['Price'], req.type)
        req.totalValue = getTotalValue(req.tickets)
        req.date = new Date()
        req.protocol = req.date.getTime() % 1000000

        try {
            const id = await saleDao.addSale(req)
            req.id = id['Id']
        } catch (error) {
            throw 'A venda contém informações inválidas.'
        }

        req.tickets = mapTicketsData(req.tickets, req)

        try {
            req.tickets.forEach(ticket => ticketDao.addTicket(ticket))
        } catch (error) {
            throw 'Os ingressos contém informações inválidas.'
        }
    }
}