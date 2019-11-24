const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createLop = function (lopInfo, callback) {
    const { l_ma, l_ten, l_khoa, l_xoa, bmcn_ma } = lopInfo;

    pool.query('INSERT INTO lop (l_ma, l_ten, l_khoa, l_xoa, bmcn_ma) VALUES ($1, $2, $3, $4, $5)', [l_ma, l_ten, l_khoa, l_xoa, bmcn_ma], (error, result) => {
        callback(error, result);
    });
};



module.exports.getLopList = function (callback) {
    pool.query('SELECT * FROM lop', (error, results) => {
        callback(error, results.rows);
    });
};