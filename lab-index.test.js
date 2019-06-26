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
