const db = require('./connection')

module.exports = {
    addSession: session => db.query(
        'INSERT INTO tb_sessoes (dt_sessao, id_local, id_evento, "nr_valorInteira") VALUES ($1, $2, $3, $4)',
        [session.date, session.local, session.event, session.price]
    )
}