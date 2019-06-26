const { createFiles } = require('./create-files');
const { readDirectory } = require('./rename-files');

describe('renames files', () => {
    beforeEach(done => {
        createFiles('./fixtures', 100, done);
    });

    it('gets all files in target directory and renames them', () => {



    }); 
});
