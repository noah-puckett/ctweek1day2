const fs = require('fs');
const { createFiles } = require('./create-files');
const { readDirectory, rename, getModifiedTime, readFile, renameEverything } = require('./rename-files');

describe('renames files', () => {

    beforeAll(done => {
        fs.mkdir('./fixtures', done);
    });

    beforeEach(done => {
        createFiles('./fixtures', 100, done);
    });

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

    it('gets all files in target directory and renames them', done => {
        readDirectory('./fixtures', (err, files) => {
            expect(files).toHaveLength(100);
            done();
        });


    }); 

    it('can rename file given a path and a new path', done => {

        fs.readFile('./fixtures/0.txt', { encoding: 'utf8', }, (err, oldFileContent) => {
            rename('./fixtures/0.txt', './fixtures/new-name.txt', err => {
                expect(err).toBeFalsy();

                fs.readFile('./fixtures/new-name.txt', { encoding: 'utf8' }, (err, newFileContent) => {
                    expect(newFileContent).toEqual(oldFileContent);
                    done();
                });
            });
        });
    });

    it('gets the last modified date of a file', () => {

        getModifiedTime('./fixtures/0.txt', (err, modifiedTime) => {
            expect(err).toBeFalsy();

            expect(modifiedTime).toEqual(expect.any(String));
        });
    });

    it('gets the contents of a file', done => {
        fs.readFile('./fixtures/0.txt', { encoding: 'utf8' }, (err, expectedContent) => {
            readFile('./fixtures/0.txt', (err, resultContent) => {
                expect(err).toBeFalsy();
                expect(resultContent).toEqual(expectedContent);
                done();
            });
        });
    });

    it('renames all files in directory to content-fileNumber-date', done => {

        renameEverything('./fixtures', err => {
            expect(err).toBeFalsy();

            fs.readdir('./fixtures', (err, files) => {
                expect(files).toHaveLength(100);
                done();
            });
        });
    });
});
