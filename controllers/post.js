var dbQuries = require('./modules/post/db_queries');

module.exports.getPostList = function (req, res, next) {
    dbQuries.getPostList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get post list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.createPost = function (req, res, next) {
    var postInfo = req.body;
    dbQuries.createPost(postInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new post!",
                error: error
            });
        }
        res.status(201).send("Post is added successfully!");
    });
};

module.exports.getPostById = function (req, res, next) {
    var postId = req.params.id;
    dbQuries.getPostById(postId, function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get post with id " + postId,
                error: error
            });
        }
        res.status(200).json(results);
    });
};

module.exports.updatePostById = function (req, res, next) {
    var postId = req.params.id;
    var postInfo = req.body;
    dbQuries.updatePostById(postId, postInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error update post with id " + postId,
                error: error
            });
        }
        res.status(201).send("Post with id " + postId + " is updated successfully!");
    });
};

module.exports.deletePostById = function (req, res, next) {
    var postId = req.params.id;
    dbQuries.deletePostById(postId, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error delete post with id " + postId,
                error: error
            });
        }
        res.status(200).json("Delete post with id " + postId + " successfully");
    });
};