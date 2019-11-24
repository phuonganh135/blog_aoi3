var dbQuries = require('./modules/lop/db_queries');

module.exports.createLop = function (req, res, next) {
    var lopInfo = req.body;
    dbQuries.createLop(lopInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create lop user!",
                error: error
            });
        }
        res.status(201).send("Lop is added successfully!");
    });
};


module.exports.getLopList = function (req, res, next) {
    dbQuries.getLopList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get lop list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};