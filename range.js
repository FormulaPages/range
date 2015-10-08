(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.RANGE = mod.exports;
  }
})(this, function (exports, module) {
  /*
   * A range represents a fragment of a worksheet.
   * It is defined as two points in a flat worksheet array.
   *
   * Use address system to convert row/col to cell indexes.
   */
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RANGE = (function () {

    /* The constructor captures top left and bottom right cell indexes.
     */

    function RANGE(topLeftCellIndex, bottomRightCellIndex) {
      var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

      _classCallCheck(this, RANGE);

      this.topLeft = topLeftCellIndex;
      this.bottomRight = bottomRightCellIndex;
      this.name = name;
    }

    _createClass(RANGE, [{
      key: 'hit',

      /* Determine if cellIndex is within range
       */
      value: function hit(cellIndex) {
        // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
        return this.topLeft <= cellIndex && cellIndex <= this.bottomRight;
      }
    }, {
      key: 'cells',

      /* Return a list of cells
       */
      value: function cells() {
        var o = [];
        for (var i = typeof this.topLeft === 'function' ? this.topLeft() : this.topLeft; i <= (typeof this.bottomRight === 'function' ? this.bottomRight() : this.bottomRight); i++) {
          o.push(i);
        }
        return o;
      }
    }]);

    return RANGE;
  })();

  module.exports = RANGE;
});
