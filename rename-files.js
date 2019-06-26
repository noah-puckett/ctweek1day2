const fs = require('fs');

function readDirectory(directory, callback) {
    fs.readdir(directory, (err, files) => {
        callback(err, files);

    });
}

function rename(path, newPath, callback) {
    fs.rename(path, newPath, err => {
        callback(err);
    });
}

module.exports = { readDirectory, rename };
