var dbQuries = require('./modules/khoa/db_queries');

module.exports.createKhoa = function (req, res, next) {
    var khoaInfo = req.body;
    dbQuries.createKhoa(khoaInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new khoa!",
                error: error
            });
        }
        res.status(201).send("Khoa is added successfully!");
    });
};

module.exports.getKhoaList = function (req, res, next) {
    dbQuries.getKhoaList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get khoa list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};