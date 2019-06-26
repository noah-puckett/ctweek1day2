//import your stuff
const path = require('path');
const fs = require('fs');

//created 100 files that have unique groupings of words in them
//commit, test DONE

//loop through all the files and just READ the texts in them at first
//commit, test DONE

//loop through all the files and change their names
//commit, test NOT DONE, STUCK

//create variables for old file name, new file name, last modified date time
//commit, test

//I need to read a directory,
//I need to loop through all the files
//for each file I need to:
//read its contents, write new contents USING some of the already-present contents

//loop through all the files and turn the contents into a variable
//assign that variable to the file name
//commit, test

//add more things to the file name, last modified, file number, etc.
//commit, test

//below you can see that you can INTERPOLATE values in a path name, which will 
//come in handy eventually

// const testVar = 'users';
// console.log(path.join(`/home-${testVar}`))
//`${FILE_CONTENT}-${OLD_FILE_NUMBER}-${LAST_MODIFIED_DATETIME}`


const directoryPath = path.join(__dirname, 'friend-files');

fs.readdir(directoryPath, function(err, files) {
    if(err) {
        return console.log('something in your loop broke?', err);
    }

    files.forEach((file) => {
        fs.readFile('./friend-files/' + file, { encoding: 'utf8' }, (err, content) => {
            if(err) {
                return console.log(err, 'something in your read file loop broke');
            }
            console.log(content);

            fs.writeFile('./friend-files/' + content, content, err => {
                if(err) {
                    return console.error(err);
                }
                console.log(content);
            });
        });
    });
});
