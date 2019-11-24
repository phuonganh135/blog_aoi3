var dbQuries = require('./modules/giangvien/db_queries');

module.exports.createGiangVien = function (req, res, next) {
    var giangvienInfo = req.body;
    dbQuries.createGiangVien(giangvienInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new giangvien!",
                error: error
            });
        }
        res.status(201).send("giangvien is added successfully!");
    });
};

module.exports.getGiangVienList = function (req, res, next) {
    dbQuries.getGiangVienList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get GiangVien list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.getGiangVienInfo = function (req, res, next) {
    var gv_ma = req.query.gv_ma;
    dbQuries.getGiangVienInfo(gv_ma,function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get GiangVien info!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};