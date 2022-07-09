const db = require('./connection')

module.exports = {
    addLocal: local => db.query(
        'INSERT INTO tb_local (ds_local, nr_assentos) VALUES ($1, $2)',
        [local.name, local.capacity]
    )
}