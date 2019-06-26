//import your stuff
const path = require('path');
const fs = require('fs');

//created 100 files that have unique groupings of words in them
//commit, test DONE

//loop through all the files and just READ the texts in them at first
//commit, test

//when I am done I should be able to... see all the files and their contents



//loop through all the files and change their names
//commit, test

//create variables for old file name, new file name, last modified date time
//commit, test

//loop through all the files and turn the contents into a variable
//assign that variable to the file name
//commit, test

//add more things to the file name, last modified, file number, etc.
//commit, test

const directoryPath = path.join(__dirname, 'friend-files');

fs.readdir(directoryPath, function(err, files) {
    if(err) {
        return console.log('something in your loop broke?', err);
    }
    console.log(files);

    files.forEach((file) => {
        fs.readFile('./friend-files/' + file, { encoding: 'utf8' }, (err, content) => {
            if(err) {
                return console.log(err, 'something in your read file loop broke');
            }
            console.log(content);
        });
    });
});
