const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.getThoiGianList = function (nh_ma, hk_ma, callback) {
    pool.query('SELECT * FROM thoigian_dk_bc as tgdkbc, loai_thoigian as ltg WHERE tgdkbc.ltg_ma = ltg.ltg_ma and tgdkbc.nh_ma = $1 and tgdkbc.hk_ma = $2', [nh_ma, hk_ma], (error, results) => {
        callback(error, results.rows);
    });
};