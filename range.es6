/*
 * A range represents a fragment of a worksheet.
 */
class Range {

  /* The constructor captures top left and bottom right cell indexes.
   */
  constructor(topLeftCellIndex, bottomRightCellIndex) {
    this.topLeft = topLeftCellIndex;
    this.bottomRight = bottomRightCellIndex;
  }

  /* Determine if cellIndex is within range
   */
  hit(cellIndex) {
    // The cell id puts the whole table into a single dimension. It simply needs to be between the topLeft and the bottomRight to qualify.
    return (this.topLeft <= cellIndex <= this.bottomRight);
  }
  
}
