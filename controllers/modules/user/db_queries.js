/* QUERIES FOR USERS */
const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.getUserList = function (callback) {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.getUserById = function (userId, callback) {
    pool.query('SELECT * FROM users WHERE id = $1', [userId], (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.createUser = function (userInfo, callback) {
    const { username, password, fullname, email, more_info } = userInfo;
    const hashedPassword = commonModule.generateHashString(password);
    const verified = 'TRUE';
    const role = 'user';

    pool.query('INSERT INTO users (username, password, fullname, email, verified, more_info, role) VALUES ($1, $2, $3, $4, $5, $6, $7)', [username, hashedPassword, fullname, email, verified, more_info, role], (error, result) => {
        callback(error, result);
    });
};

module.exports.updateUserById = function (userId, updateInfo, updatePassword, callback) {
    var valuesForQuery = [];
    var queryString = '';
    if (updatePassword == true) {
        const password = updateInfo;
        const hashedPassword = commonModule.generateHashString(password);
        valuesForQuery = [hashedPassword, userId];
        queryString = 'UPDATE users SET password = $1 WHERE id = $2';
    }
    else {
        const { username, fullname, email, more_info } = updateInfo;
        valuesForQuery = [username, fullname, email, more_info, userId];
        queryString = 'UPDATE users SET username = $1, fullname = $2, email = $3, more_info = $4 WHERE id = $5';
    }
    pool.query(queryString, valuesForQuery, (error, result) => {
        callback(error, result);
    });
};

module.exports.deleteUserById = function (userId, callback) {
    pool.query('DELETE FROM users WHERE id = $1', [userId], (error, result) => {
        callback(error, result);
    });
};