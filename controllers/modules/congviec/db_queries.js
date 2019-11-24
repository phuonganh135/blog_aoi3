const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.createCongViec = function (congviecInfo, callback) {
    const { cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma } = congviecInfo;

    pool.query('INSERT INTO congviec (cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma], (error, result) => {
        callback(error, result);
    });
};


module.exports.getCongViecList = function (dt_ma , sv_ma, ttcv_ma,callback) {
    pool.query('SELECT * FROM congviec WHERE dt_ma=$1 and sv_ma=$2 and ttcv_ma=$3 and cv_xoa=0', [dt_ma , sv_ma, ttcv_ma], (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.getCongViecInfoList = function (dt_ma, sv_ma, cv_stt ,callback) {
    pool.query('SELECT * FROM congviec WHERE dt_ma=$1 and sv_ma=$2 and cv_stt=$3 and cv_xoa=0', [dt_ma, sv_ma ,cv_stt], (error, results) => {
        callback(error, results.rows);
    });
};


module.exports.moveCongViec = function (dt_ma, sv_ma, cv_stt, ttcv_ma, callback) {

    pool.query('UPDATE congviec set ttcv_ma=$4 WHERE dt_ma=$1 and sv_ma=$2 and cv_stt=$3 ', [dt_ma, sv_ma, cv_stt, ttcv_ma], (error, result) => {
        callback(error, result);
    });
};


module.exports.deleteCongViec = function (dt_ma, sv_ma, cv_stt , callback) {

    pool.query('UPDATE congviec set cv_xoa=1 WHERE dt_ma=$1 and sv_ma=$2 and cv_stt=$3 ', [dt_ma, sv_ma, cv_stt], (error, result) => {
        callback(error, result);
    });
};


module.exports.updateCongViecInfo = function (cvInfo, callback) {

    const { dt_ma, sv_ma, cv_stt ,cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt } = cvInfo;

    pool.query('UPDATE congviec set cv_ten=$1, cv_noidung=$2, cv_thoigian_db=$3, cv_thoigian_kt=$4   WHERE dt_ma=$5 and sv_ma=$6 and cv_stt=$7 ', [cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt , dt_ma, sv_ma, cv_stt  ], (error, result) => {
        callback(error, result);
    });
};