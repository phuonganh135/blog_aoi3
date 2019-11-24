var dbQuries = require('./modules/detai/db_queries');

module.exports.createDeTai = function (req, res, next) {
    var detaiInfo = req.body;
    dbQuries.createDeTai(detaiInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new detai!",
                error: error
            });
        }
        res.status(201).send("Detai is added successfully!");
    });
};


module.exports.getDeTaiList = function (req, res, next) {
    var gv_ma = req.query.gv_ma;
    dbQuries.getDeTaiList(gv_ma, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get detai list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};


module.exports.getDeTaiInfo = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    dbQuries.getDeTaiInfo(dt_ma, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get detai info!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};


module.exports.updateDeTai = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    var detaiInfo = req.body;
    dbQuries.updateDeTai(dt_ma, detaiInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error update detai " + dt_ma,
                error: error
            });
        }
        res.status(201).send("Detai " + dt_ma + " is updated successfully!");
    });
};


module.exports.deleteDeTai = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    dbQuries.deleteDeTai(dt_ma, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error delete detai " + dt_ma,
                error: error
            });
        }
        res.status(200).json("Delete detai " + dt_ma + " successfully");
    });
};