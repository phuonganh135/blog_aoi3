const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createThongBaoDeTai = function (thongbaodetaiInfo, callback) {
    const { tbdt_tuade, tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian,dt_ma } = thongbaodetaiInfo;

    pool.query('INSERT INTO thongbao_detai (tbdt_tuade, tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian,dt_ma) VALUES ($1, $2, $3, $4, $5, $6)', [tbdt_tuade, tbdt_noidung, sv_ma, tbdt_xoa, tbdt_thoigian,dt_ma], (error, result) => {
        callback(error, result);
    });
};

module.exports.getThongBaoDeTaiList = function (callback) {
    pool.query('SELECT * FROM thongbao_detai as tbdt, sinhvien as sv, detai as dt WHERE tbdt.sv_ma = sv.sv_ma and tbdt.dt_ma = dt.dt_ma  ', (error, results) => {
        callback(error, results.rows);
    });
};