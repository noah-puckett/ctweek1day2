const fs = require('fs');

function readDirectory(directory, callback) {
    fs.readdir(directory, (err, files) => {
        if(err) {
            return console.log(err);
        }

    });
}

module.exports = { readDirectory };
