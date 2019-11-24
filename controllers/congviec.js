var dbQuries = require('./modules/congviec/db_queries');


module.exports.createCongViec = function (req, res, next) {
    var congviecInfo = req.body;
    dbQuries.createCongViec(congviecInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new congviec!",
                error: error
            });
        }
        res.status(201).send("Congviec is added successfully!");
    });
};

module.exports.getCongViecList = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    var ttcv_ma = req.query.ttcv_ma;
    dbQuries.getCongViecList(dt_ma , sv_ma, ttcv_ma, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get congviec list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.getCongViecInfoList = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    var cv_stt = req.query.cv_stt;
    dbQuries.getCongViecInfoList(dt_ma, sv_ma, cv_stt, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get congviec info list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};



module.exports.moveCongViec = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    var cv_stt = req.query.cv_stt;
    var ttcv_ma = req.query.ttcv_ma;
    dbQuries.moveCongViec(dt_ma, sv_ma, cv_stt, ttcv_ma, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error move congviec " + dt_ma,
                error: error
            });
        }
        res.status(201).send("Congviec is move successfully!");
    });
};


module.exports.deleteCongViec = function (req, res, next) {
    var dt_ma = req.query.dt_ma;
    var sv_ma = req.query.sv_ma;
    var cv_stt = req.query.cv_stt;
    dbQuries.deleteCongViec(dt_ma, sv_ma, cv_stt , function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error delete congviec " + dt_ma,
                error: error
            });
        }
        res.status(201).send("Congviec is delete successfully!");
    });
};


module.exports.updateCongViecInfo = function (req, res, next) {
    var cvInfo = req.body;
    dbQuries.updateCongViecInfo( cvInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error update congviec info ",
                error: error
            });
        }
        res.status(201).send("Congvie info is update successfully!");
    });
};