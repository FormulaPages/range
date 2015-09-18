var assert = require('assert');
describe('addressSystem', function() {
    var range = require('./range');

    it('it should be there when you require it', function () {
      assert( typeof range !== undefined, 'not there for me');
    });
});
