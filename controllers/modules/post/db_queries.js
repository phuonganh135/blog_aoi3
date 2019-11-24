/* QUERIES FOR POSTS */
const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.getPostList = function (callback) {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.getPostById = function (postId, callback) {
    pool.query('SELECT * FROM posts WHERE id = $1', [postId], (error, results) => {
        callback(error, results.rows);
    });
};

module.exports.createPost = function (postInfo, callback) {
    const { title, content, author_id } = postInfo;

    pool.query('INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3)', [title, content, author_id], (error, result) => {
        callback(error, result);
    });
};

module.exports.updatePostById = function (postId, postInfo, updatePassword, callback) {
    const { title, content } = postInfo;

    pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3', [title, content, postId], (error, result) => {
        callback(error, result);
    });
};

module.exports.deletePostById = function (postId, callback) {
    pool.query('DELETE FROM posts WHERE id = $1', [postId], (error, result) => {
        callback(error, result);
    });
};