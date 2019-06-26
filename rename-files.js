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

function getModifiedTime(path, callback) {

    fs.stat(path, (err, stats) => {
        //if stats evals to falsy, run callback error, do not run the stats.mtime.toISOString
        callback(err, stats && stats.mtime.toISOString());
    });
}

module.exports = { readDirectory, rename, getModifiedTime };
