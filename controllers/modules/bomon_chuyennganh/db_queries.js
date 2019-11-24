const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.createBoMonChuyenNganh = function (bomon_chuyennganhInfo, callback) {
    const { bmcn_ma, bmcn_ten, bmcn_xoa, k_ma } = bomon_chuyennganhInfo;

    pool.query('INSERT INTO bomon_chuyennganh (bmcn_ma, bmcn_ten, bmcn_xoa, k_ma) VALUES ($1, $2, $3, $4)', [bmcn_ma, bmcn_ten, bmcn_xoa, k_ma], (error, result) => {
        callback(error, result);
    });
};


module.exports.getBoMonChuyenNganhList = function (k_ma, callback) {
    pool.query('SELECT * FROM bomon_chuyennganh WHERE k_ma = $1', [k_ma], (error, results) => {
        callback(error, results.rows);
    });
};