/*
 * A range represents a fragment of a worksheet.
 * It is defined as two points in a flat worksheet array.
 *
 * Use address system to convert row/col to cell indexes.
 */
export default class RANGE {

  /* The constructor captures top left and bottom right cell indexes.
   */
  constructor(topLeftCellIndex, bottomRightCellIndex, name='') {
    this.topLeft = topLeftCellIndex;
    this.bottomRight = bottomRightCellIndex;
    this.name = name;
  }

  /* Determine if cellIndex is within range
   */
  hit(cellIndex) {
    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    return ((this.topLeft <= cellIndex) &&
            (cellIndex <= this.bottomRight));
  }

  /* Return a list of cells
   */
  cells() {
    var o = [];
    for (var i = (typeof this.topLeft === 'function' ? this.topLeft() : this.topLeft);
      i <= (typeof this.bottomRight === 'function' ? this.bottomRight() : this.bottomRight); i++) {
        o.push(i);
    }
    return o;
  }

}
