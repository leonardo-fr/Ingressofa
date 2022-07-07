const db = require('./connection')

module.exports = {
    addEvent: newEvent => db.query(
        'INSERT INTO tb_eventos (ds_evento, dt_cadastro, ds_tipoevento) VALUES ($1, current_timestamp, $2)',
        [newEvent.name, newEvent.type]
    )
}