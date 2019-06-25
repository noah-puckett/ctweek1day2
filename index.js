const fs = require('fs');

fs.readFile('./README.md', { encoding: 'utf8' }, (err, data) => {
    if(err) {
        console.error(err);
    }
});

const data = 'YOU ARE SUCCESS';

fs.writeFile('./hi.txt', data, (err) => {
    if(err) {
        console.error('YA FUCKED UP');
    }
    console.log('Ya done wrote it, kid!');
});
