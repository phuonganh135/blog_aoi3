const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);



module.exports.createBinhLuan = function (binhluanInfo, callback) {
    const { cv_stt, dt_ma, sv_ma, bl_noidung, bl_thoigian, bl_xoa} = binhluanInfo;

    pool.query('INSERT INTO binhluan (cv_stt, dt_ma, sv_ma, bl_noidung, bl_thoigian, bl_xoa) VALUES ($1, $2, $3, $4, $5, $6)', [cv_stt, dt_ma, sv_ma, bl_noidung, bl_thoigian, bl_xoa], (error, result) => {
        // callback(error, result);
        //if (error) {
            callback(error, result);
        //}
        // pool.query('INSERT INTO sinhvien_lop (svl_xoa, sv_ma , l_ma ) VALUES ($1, $2 ,$3)', [svl_xoa, sv_ma , l_ma], (error2, result2) => {
        //     // callback(error, result);
        //     callback(error2, result2);
        // });
    });
    
};



module.exports.getBinhLuanList = function (cv_stt, dt_ma , sv_ma, callback) {
    pool.query('SELECT * FROM binhluan WHERE cv_stt=$1 and dt_ma=$2 and sv_ma=$3 and bl_xoa=0 ', [cv_stt, dt_ma , sv_ma] , (error, results) => {
        callback(error, results.rows);
    });
};



module.exports.deleteBinhLuan = function (cv_stt, dt_ma , sv_ma, bl_stt, callback) {
    pool.query('UPDATE binhluan SET bl_xoa=1 WHERE cv_stt=$1 and dt_ma=$2 and sv_ma=$3 and bl_stt=$4', [cv_stt, dt_ma , sv_ma , bl_stt] , (error, results) => {
        callback(error, results.rows);
    });
};