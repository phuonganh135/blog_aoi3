const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createGiangVienHuongDan = function (gvhuongdanInfo, callback) {
    const { gvhd_soluong, gvhd_xoa, gv_ma, hk_ma, nh_ma } = gvhuongdanInfo;

    pool.query('INSERT INTO gianvien_huongdan (gvhd_soluong, gvhd_xoa, gv_ma, hk_ma, nh_ma) VALUES ($1, $2, $3, $4, $5)', [gvhd_soluong, gvhd_xoa, gv_ma, hk_ma, nh_ma], (error, result) => {
        callback(error, result);
    });
};

module.exports.getGiangVienHuongDanList = function (callback) {
    pool.query('SELECT * FROM gianvien_huongdan as gvhd, hocki as hk, gianvien as gv WHERE gvhd.gv_ma = gv.gv_ma and gvhd.hk_ma = hk.hk_ma', (error, results) => {
        callback(error, results.rows);
    });
};