var dbQuries = require('./modules/hocki/db_queries');

module.exports.getHocKiList = function (req, res, next) {
    dbQuries.getHocKiList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get hocki list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};