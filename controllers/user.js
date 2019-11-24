var dbQuries = require('./modules/user/db_queries');

module.exports.getUserList = function (req, res, next) {
    dbQuries.getUserList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get user list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.createUser = function (req, res, next) {
    var userInfo = req.body;
    dbQuries.createUser(userInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new user!",
                error: error
            });
        }
        res.status(201).send("User is added successfully!");
    });
};

module.exports.getUserById = function (req, res, next) {
    var userId = req.params.id;
    dbQuries.getUserById(userId, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get user with id " + userId,
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.updateUserById = function (req, res, next) {
    var userId = req.params.id;
    var userInfo = req.body;
    var updatePassword = false;
    dbQuries.updateUserById(userId, userInfo, updatePassword, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error update user with id " + userId,
                error: error
            });
        }
        res.status(201).send("User with id " + userId + " is updated successfully!");
    });
};

module.exports.deleteUserById = function (req, res, next) {
    var userId = req.params.id;
    dbQuries.deleteUserById(userId, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error delete user with id " + userId,
                error: error
            });
        }
        res.status(200).json("Delete user with id " + userId + " successfully");
    });
};