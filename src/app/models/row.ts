import {Cell, EmptyCell} from "./cells/cell";
import {getPositiveResidue} from "./grid.position";

export class Row {
  constructor(public cells: Cell[]) {
  }

  addCell(cell: Cell, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.cells.push(cell);
      return;
    }

    this.cells.splice(position, 0, cell);
    return;
  }

  removeCell(position: number): void {
    // Remove an element in the array.
    this.cells.splice(position, 1);
    return;
  }

  getCell(position: number): Cell {
    // Return the requested cell.
    return this.cells[getPositiveResidue(position, this.getNCells())];
  }

  changeCell(new_cell: Cell, position: number) {
    // Return the requested cell.
    this.cells[getPositiveResidue(position, this.getNCells())] = new_cell;
  }

  exitEditMode() {
    for (let cell of this.cells) {
      cell.exitEditMode();
    }
  }

  isInEditMode(): boolean {
    for (let cell of this.cells) {
      if (cell.isInEditMode()) {
        return true;
      }
    }
    return false;
  }

  getHTMLCode(): string {
    // Start by opening the table and fieldset.
    let HTMLCode = `
        <tr>`
    // Get the HTML code for every row.
    for (let cell of this.cells) {
      HTMLCode = HTMLCode + cell.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `
        </tr>`;
    return HTMLCode;
  }

  isEmpty() {
    return this.getNCells() === 0;
  }

  getNCells() {
    return this.cells.length;
  }
}

export class EmptyRow extends Row {
  constructor() {
    super([new EmptyCell()]);
  }

  override addCell(cell: Cell, position: number = -1): void {
    return;
  }

  override removeCell(position: number): void {
    return;
  }

  override isEmpty() {
    return true;
  }
}
