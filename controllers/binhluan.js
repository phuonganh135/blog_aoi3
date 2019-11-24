var dbQuries = require('./modules/binhluan/db_queries');


module.exports.createBinhLuan = function (req, res, next) {
    var binhluanInfo = req.body;
    dbQuries.createBinhLuan(binhluanInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new binhluan!",
                error: error
            });
        }
        res.status(201).send("Binhluan is added successfully!");
    });
};


module.exports.getBinhLuanList = function (req, res, next) {
    var cv_stt = req.query.cv_stt;
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    dbQuries.getBinhLuanList( cv_stt, dt_ma , sv_ma,  function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get binhluan list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.deleteBinhLuan = function (req, res, next) {
    var cv_stt = req.query.cv_stt;
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    var bl_stt = req.query.bl_stt;
    dbQuries.deleteBinhLuan( cv_stt, dt_ma , sv_ma, bl_stt,  function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error delete binhluan list!",
                error: error
            });
        }
        res.status(201).send("Sinhvien is added successfully!");
    });
};