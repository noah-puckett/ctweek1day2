const fs = require('fs');
const { getAnimal, createFiles } = require('./create-files');
// const { join } = require('path');

describe('create files', () => {

    // beforeEach(done => {
    //     fs.writeFile(join(__dirname, './copy-me.txt'), 'Copy Me', done);
    // });
    
    afterEach(done => {
        fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
            if(files.length === 0) done();
            let deletedSoFar = 0;
            files.forEach(file => {
                fs.unlink(`./fixtures/${file}`, err => {
                    if(err) {
                        return done(err);
                    }
                    deletedSoFar += 1;
                    if(deletedSoFar === files.length) done();
                });
            });
        });
    });

    it('can get a random animal species', () => {

        const animal = getAnimal();

        expect(animal).toEqual(expect.any(String));
    }); 

    it('can write many files with animals', done => {
        createFiles('./fixtures', 100, err => {
            expect(err).toBeFalsy();

            fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
                expect(files).toHaveLength(100);
                done();
            });
        });
    });
});
