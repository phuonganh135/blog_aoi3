var dbQuries = require('./modules/sv_dangki_dt/db_queries');

module.exports.createSVDangKiDT = function (req, res, next) {
    var svdangkidtInfo = req.body;
    dbQuries.createSVDangKiDT(svdangkidtInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new sv_dangki_dt!",
                error: error
            });
        }
        res.status(201).send("Sv_dangki_dt is added successfully!");
    });
};


module.exports.getSVDangKiDTList = function (req, res, next) {
    dbQuries.getSVDangKiDTList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get sv_dangki_dt list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};