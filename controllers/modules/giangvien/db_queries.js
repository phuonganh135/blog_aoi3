
const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createGiangVien = function (giangvienInfo, callback) {
    const { gv_ma, gv_ten, gv_gioitinh, gv_ngaysinh, gv_cmnd , gv_diachi , gv_email , gv_sdt , gv_matkhau , gv_xoa , bmcn_ma } = giangvienInfo;

    pool.query('INSERT INTO gianvien (gv_ma, gv_ten, gv_gioitinh, gv_ngaysinh, gv_cmnd , gv_diachi , gv_email , gv_sdt , gv_matkhau , gv_xoa , bmcn_ma) VALUES ($1, $2, $3, $4, $5, $6, $7 , $8 , $9 , $10 , $11)', [gv_ma, gv_ten, gv_gioitinh, gv_ngaysinh, gv_cmnd , gv_diachi , gv_email , gv_sdt , gv_matkhau , gv_xoa , bmcn_ma], (error, result) => {
        callback(error, result);
    });
};

module.exports.getGiangVienList = function (callback) {
    pool.query('SELECT * FROM gianvien', (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.getGiangVienInfo = function (gv_ma, callback) {
    pool.query('SELECT * FROM gianvien as gv, bomon_chuyennganh as bmcn, khoa as k WHERE gv.bmcn_ma = bmcn.bmcn_ma and bmcn.k_ma = k.k_ma and gv.gv_ma = $1', [gv_ma], (error, results) => {
        callback(error, results.rows);
    });
};