var crypto = require('crypto');
var hash = crypto.createHash('sha512');

module.exports.generateHashString = function(str) {
    hash.update(str, 'utf-8');
    var gen_hash = hash.digest('hex');
    console.log(gen_hash);
    return gen_hash;
}