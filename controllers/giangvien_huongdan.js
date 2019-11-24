var dbQuries = require('./modules/giangvien_huongdan/db_queries');

module.exports.createGiangVienHuongDan = function (req, res, next) {
    var gvhuongdanInfo = req.body;
    dbQuries.createGiangVienHuongDan(gvhuongdanInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new giangvien_huongdan!",
                error: error
            });
        }
        res.status(201).send("giangvien_huongdan is added successfully!");
    });
};

module.exports.getGiangVienHuongDanList = function (req, res, next) {
    dbQuries.getGiangVienHuongDanList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get giangvien_huongdan list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

