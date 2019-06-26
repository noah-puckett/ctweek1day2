const fs = require('fs');
const animals = ['dog', 'cat', 'zebra', 'possum', 'horse', 'sloth', 'giraffe'];

function getAnimal() {
    const index = Math.floor(Math.random() * animals.length);
    return animals[index];
}

function createFiles(directory, count, callback) {

    let writtenSoFar = 0;

    for(let i = 0; i < count; i++) {
        
        fs.writeFile(`${directory}/${i}.txt`, getAnimal(), err => {

            if(err) return callback(err);
            writtenSoFar += 1;
            if(writtenSoFar === count) callback();
        });
    }
}

module.exports = { getAnimal, createFiles };
