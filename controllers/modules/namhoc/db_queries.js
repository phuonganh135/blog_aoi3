const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.getNamHocList = function (callback) {
    pool.query('SELECT * FROM namhoc', (error, results) => {
        callback(error, results.rows);
    });
};