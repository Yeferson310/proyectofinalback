// inicializar la base de datos utilizando possgress, creacion de relacion entre js y base de datos //
//integracion del front con el nuevo servidor parte 3//
// integrar el front con el back //

const postgres = require('postgres');

const config = {
    host: 'localhost',
    user: 'jeffo',
    password: 'senpai',
    database: 'api',
};

const pool = mysql.createPool(config);
module.exports = pool;
const pool = require('../data/config');

const id = request.params.id;