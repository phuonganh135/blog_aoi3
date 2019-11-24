const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createKhoa = function (khoaInfo, callback) {
    const { makhoa , tenkhoa , xoa } = khoaInfo;

    pool.query('INSERT INTO khoa (k_ma, k_ten, k_xoa) VALUES ($1, $2, $3)', [makhoa, tenkhoa, xoa], (error, result) => {
        callback(error, result);
    });
};

module.exports.getKhoaList = function (callback) {
    pool.query('SELECT * FROM khoa', (error, results) => {
        callback(error, results.rows);
    });
};