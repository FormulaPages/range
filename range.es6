/*
 * A range represents a fragment of a worksheet.
 * It is defined as two points in a flat worksheet array.
 *
 * Use address system to convert row/col to cell indexes.
 */


import CELLINDEX from 'formula-cellindex';
import INDEX2COL from 'formula-index2col';
import INDEX2ROW from 'formula-index2row';

export default class RANGE {

  /* The constructor captures top left and bottom right cell indexes.
   */
  constructor(sheet, topLeft, bottomRight, name='') {
    if (sheet.constructor.name !== 'SHEET') {
      throw Error('sheet must be from SHEET constructor');
    }

    this.sheet = sheet;
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.name = name;
    this.length = this.cells().length;
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
    var start = typeof this.topLeft === 'function' ? this.topLeft() : this.topLeft,
        end = typeof this.bottomRight === 'function' ? this.bottomRight() : this.bottomRight;
    
    return Array.apply(start, Array(end+1)).map(function (x, y) { return y; });
  }

  /* Return the first column
   */
  topColumn() {
    return INDEX2COL(this.topLeft);
  }

  /* Return the first row
   */
  topRow() {
    return INDEX2ROW(this.topLeft);
  }

  /* Return the bottom column
   */
  bottomColumn() {
    return INDEX2COL(this.bottomRight);
  }

  /* Return the bottom row_num
   */
  bottomRow() {
    return INDEX2ROW(this.bottomRight);
  }

  /* Return a list of rows
   */
  rows() {
    var self = this;
    return Array.apply(this.topRow(), Array(this.bottomRow()+1)).map(function (x, row) {
      return Array.apply(self.topColumn(), Array(self.bottomColumn()+1)).map(function (x, col) {
        return self.sheet.data[CELLINDEX(row, col)];
      })
    })
  }

  /* Implements a filter a set of rows */
  filter(f) {
    this.rows()
  }

}
