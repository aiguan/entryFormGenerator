import {Cell, EmptyCell} from "./cells/cell";
import {GridPosition, getPositiveResidue} from "./grid.position";
import {throwError} from "rxjs";
import {EmptyRow, Row} from "./row";
import {OneLineCell} from "./cells/one.line.cell";
import {TwoLinesCell} from "./cells/two.lines.cell";

export class TableGenerator {
  constructor(public rows: Row[], public width: string = '100%') {}

  addRow(row: Row, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.rows.push(row);
      return;
    }

    this.rows.splice(position, 0, row);
    return;
  }

  removeRow(position: number): void {
    // Remove an element in the array.
    this.rows.splice(position, 1);
    return;
  }

  getRow(position: number): Row {
    // Get the requested row.
    return this.rows[getPositiveResidue(position, this.getNRows())];
  }

  changeRow(new_row: Row, position: number) {
    // Get the requested row.
    this.rows[getPositiveResidue(position, this.getNRows())] = new_row;
  }

  addCell(cell: Cell, position: GridPosition): void {
    if (position.isNull()) {
      return;
    }

    if (position.is_new) {
      if (cell instanceof EmptyCell) {
        this.addRow(new EmptyRow(), position.getRowIndex())
      } else {
        this.addRow(new Row([]), position.getRowIndex());
      }
    }
    const row = this.getRow(position.getRowIndex(this.getNRows()))
    let pos = position.getCellIndex();
    if (pos !== row.getNCells()) {
      position.getCellIndex(row.getNCells())
    }
    row.addCell(cell, pos);
    return;
  }

  removeCell(position: GridPosition): void {
    if (position.isNull()) {
      return;
    }

    // Get appropriate row and remove the cell from there.
    const row_index: number = position.getRowIndex(this.getNRows());
    const row = this.getRow(row_index);
    row.removeCell(position.getCellIndex(row.getNCells()));

    // If there are no cells left in the row then we remove the row too.
    if (row.isEmpty()) {
      this.removeRow(row_index);
    }
    return;
  }

  getCell(position: GridPosition): EmptyCell | OneLineCell | TwoLinesCell {
    if (position.isNull()) {
      throwError(() => new Error('position should not be null to get cell.'));
    }

    const row = this.getRow(position.getRowIndex(this.getNRows()));
    return row.getCell(position.getCellIndex(row.getNCells()));
  }

  changeCell(new_cell: Cell, position: GridPosition){
    if (position.isNull()) {
      throwError(() => new Error('position should not be null to get cell.'));
    }

    const new_row = this.getRow(position.getRowIndex(this.getNRows()));
    new_row.changeCell(new_cell, position.getCellIndex(new_row.getNCells()));
    this.changeRow(new_row, position.getRowIndex(this.getNRows()))
  }

  exitEditMode() {
    for (let row of this.rows) {
      row.exitEditMode();
    }
  }

  getAllCells(): Cell[] {
    let cells: Cell[] = [];
    for (let row of this.rows) {
      for (let cell of row.cells) {
        cells.push(cell);
      }
    }
    return cells;
  }

  getHTMLCode(): string {
    // Start by opening the table and fieldset.
    let HTMLCode = `<fieldset class="bk-fields">
    <table style="width:`+this.width+`;">
`
    // Get the HTML code for every row.
    for (let row of this.rows) {
      HTMLCode = HTMLCode + row.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `
    </table>
</fieldset>
`;
    return HTMLCode;
  }

  getNRows() {
    return this.rows.length;
  }

  getNewCellPosition(): GridPosition {
    return new GridPosition(this.getNRows(), 0, true);
  }
}
