var dbQuries = require('./modules/thongbao_detai/db_queries');


module.exports.createThongBaoDeTai = function (req, res, next) {
    var thongbaodetaiInfo = req.body;
    dbQuries.createThongBaoDeTai(thongbaodetaiInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new thongbao_detai!",
                error: error
            });
        }
        res.status(201).send("Thongbao_detai is added successfully!");
    });
};

module.exports.getThongBaoDeTaiList = function (req, res, next) {
    dbQuries.getThongBaoDeTaiList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get thongbao_detai list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};