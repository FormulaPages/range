(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.range = mod.exports;
  }
})(this, function (exports) {
  /*
   * A range represents a fragment of a worksheet.
   */
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Range = (function () {

    /* The constructor captures top left and bottom right cell indexes.
     */

    function Range(topLeftCellIndex, bottomRightCellIndex) {
      _classCallCheck(this, Range);

      this.topLeft = topLeftCellIndex;
      this.bottomRight = bottomRightCellIndex;
    }

    _createClass(Range, [{
      key: "hit",

      /* Determine if cellIndex is within range
       */
      value: function hit(cellIndex) {
        // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
        return this.topLeft <= cellIndex <= this.bottomRight;
      }
    }]);

    return Range;
  })();
});
