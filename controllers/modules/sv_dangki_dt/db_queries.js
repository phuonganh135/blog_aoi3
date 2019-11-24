const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.createSVDangKiDT = function (svdangkidtInfo, callback) {
    const { svdkdt_xoa, ttdk_ma, sv_ma, dt_ma} = svdangkidtInfo;

    pool.query('INSERT INTO sinhvien_dk_detai (svdkdt_xoa, ttdk_ma, sv_ma, dt_ma) VALUES ($1, $2, $3, $4)', [svdkdt_xoa, ttdk_ma, sv_ma, dt_ma], (error, result) => {
        callback(error, result);
    });
};

module.exports.getSVDangKiDTList = function (callback) {
    pool.query('SELECT * FROM sinhvien_dk_detai as svdkdt, detai as dt, trangthai_dangki as ttdk, sinhvien as sv where svdkdt.dt_ma = dt.dt_ma and svdkdt.ttdk_ma = ttdk.ttdk_ma and svdkdt.sv_ma =  sv.sv_ma', (error, results) => {
        callback(error, results.rows);
    });
};