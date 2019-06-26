const fs = require('fs');

function readDirectory(directory, callback) {
    fs.readdir(directory, (err, files) => {
        callback(err, files);

    });
}

module.exports = { readDirectory };
