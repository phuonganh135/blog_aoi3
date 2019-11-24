const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createDeTai = function (detaiInfo, callback) {
    const { dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma  } = detaiInfo;

    pool.query('INSERT INTO detai (dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9)', [dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma], (error, result) => {
        callback(error, result);
    });
};

async function getSinhVienDangKy(dt_ma) {
    let response;
    try {
        response = await pool.query('SELECT dt_ma, count(sv_ma) as svdk FROM sinhvien_dk_detai WHERE dt_ma=$1 and ttdk_ma=\'yc\' GROUP BY sv_ma, dt_ma',[dt_ma]);
        return parseInt(response.rows[0].svdk);
    }
    catch (error) {
        console.log(eror);
    }
    
}

module.exports.getDeTaiList = function (gv_ma, callback) {
    pool.query('SELECT * FROM detai WHERE gv_ma = $1 and dt_xoa = 0',[gv_ma], async function (error, results) {
        var listDeTai = results.rows;
        // var listResult = results.rows;
        for (var i = 0; i < listDeTai.length; i++) {
            var deTai = listDeTai[i];
            var dt_ma = deTai.dt_ma;
            deTai.svdk = await getSinhVienDangKy(dt_ma);
            listDeTai[i] = deTai;
        }
        callback(error, listDeTai);
    });
};



module.exports.getDeTaiInfo = function (dt_ma, callback) {
    pool.query('SELECT * FROM detai WHERE dt_ma = $1 and dt_xoa = 0', [dt_ma], (error, results) => {
        callback(error, results.rows);
    });
};


module.exports.updateDeTai = function (dt_ma, detaiInfo, callback) {
    const { dt_ten, dt_mieuta, dt_soluong  } = detaiInfo;

    pool.query('UPDATE detai set dt_ten=$1 , dt_mieuta=$2 , dt_soluong=$3 WHERE dt_ma=$4 ', [dt_ten, dt_mieuta, dt_soluong, dt_ma], (error, result) => {
        callback(error, result);
    });
};


module.exports.deleteDeTai = function (dt_ma, callback) {
    pool.query('UPDATE detai set dt_xoa=1 WHERE dt_ma=$1', [dt_ma], (error, result) => {
        callback(error, result);
    });
};