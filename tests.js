var assert = require('assert');

describe('addressSystem', function() {
  var range = require('./RANGE');

  it('should be there when you require it', function () {
    assert( typeof range !== undefined, 'not there for me');
  });

  it('should remember the topLeft and bottomRight', function() {
    var r = new range( 0, 10);
    assert( r.topLeft === 0 );
    assert( r.bottomRight === 10 );
  });

  it('should allow an optional name', function() {
    var r = new range( 0, 10, 'my-range');
    assert(r.name === 'my-range' );
  });
  
  it('should be able to determine hits', function() {
    var r = new range( 0, 10);
    assert( r.hit(1) );
    assert( r.hit(10) );
    assert( r.hit(5) );
    assert( !r.hit(-1) );
    assert( !r.hit(11) );
  });

  it('should produce a list of indexes', function() {
    var r = new range( 0, 9);

    assert( r.cells().length === 10 );
    assert( r.cells()[0] === 0 );
    assert( r.cells()[1] === 1 );
    assert( r.cells()[2] === 2 );
    assert( r.cells()[3] === 3 );
    assert( r.cells()[4] === 4 );
    assert( r.cells()[5] === 5 );
    assert( r.cells()[6] === 6 );
    assert( r.cells()[7] === 7 );
    assert( r.cells()[8] === 8 );
    assert( r.cells()[9] === 9 );
  });

  it('should produce a list of rows', function() {
    var r = new range( 0, 9);
    assert( r.rows().length === 1 );
    assert( r.rows()[0].length === 10 );
  });
  
});
