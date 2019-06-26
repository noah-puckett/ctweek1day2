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
    fs.readFile(path, { encoding: 'utf8' }, callback);
}

function renameEverything(directory, callback) {
    readDirectory(directory, (err, files) => {
        let renamedSoFar = 0;
        files.forEach(file => {
            readFile(`${directory}/${file}`, (err, fileContent) => {


                getModifiedTime(`${directory}/${file}`, (err, modifiedTime) => {
                    if(err) {
                        return callback(err);
                    }

                    const number = file.split('.')[0];
                    rename(`${directory}/${file}`, `${directory}/${fileContent}-${number}-${modifiedTime}`, err => {
                        if(err) {
                            return callback(err);
                        }
                        renamedSoFar++;
                        if(renamedSoFar === files.length) {
                            callback();
                        }
                    });
                });
            });
        });
    });
}

module.exports = { readDirectory, rename, getModifiedTime, readFile, renameEverything };
