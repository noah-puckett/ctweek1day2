const fs = require('fs');

function readDirectory(directory, callback) {
    fs.readdir(directory, callback);
}

function rename(path, newPath, callback) {
    fs.rename(path, newPath, callback);
}

function getModifiedTime(path, callback) {

    fs.stat(path, (err, stats) => {
        //if stats evals to falsy, run callback error, do not run the stats.mtime.toISOString
        callback(err, stats && stats.mtime.toISOString());
    });
}

function readFile(path, callback) {
    fs.readfile(path, { encoding: 'utf8' }, callback);
}

module.exports = { readDirectory, rename, getModifiedTime, readFile };
