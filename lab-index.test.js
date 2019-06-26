const fs = require('fs');
const path = require('path');

describe('oh my god what am I DOING', () => {
    
    it('will loop through the array and display the contents if I am lucky', () => {

        const directoryPath = path.join(__dirname, 'friend-files');

        fs.readdir(directoryPath, function(err, files) {
            if(err) {
                return console.log('fuuuuuck', err);
            }

            files.forEach(function(file) {
                console.log(file);
            });

        });

        expect(thing).toEqual('just print literally anything please');
    }); 

});

const copy = require('./index');
const fs = require('fs');
const { join } = require('path');

describe('function for copying files?', () => {
    beforeEach(done => {
        fs.writeFile(join(__dirname, 'test.txt'), 'line seven successful', done); 
    });
    
    afterEach(done => {
        fs.unlink(join(__dirname, 'test.txt'), done);
    });

    afterEach(done => {
        fs.unlink(join(__dirname, 'test-copy.txt'), done);
    });

    it('copies a file I guess?', done => {
        copy(join(__dirname, 'test.txt'), join(__dirname, 'test-copy.txt'), err => {
            expect(err).toBeFalsy();

            fs.readFile(join(__dirname, 'test-copy.txt'), { encoding: 'utf8' }, (err, content) => {
                expect(content).toEqual('line seven successful');
                done(err);
            });
        }); 
        
    });
});

