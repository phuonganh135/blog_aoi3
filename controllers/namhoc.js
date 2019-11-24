var dbQuries = require('./modules/namhoc/db_queries');

module.exports.getNamHocList = function (req, res, next) {
    dbQuries.getNamHocList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get namhoc list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};