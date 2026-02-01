import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../../models/table.generator";
import {CUSTOM_BLOCK} from "../../models/custom.block";
import {GridPosition} from "../../models/grid.position";
import {Cell} from "../../models/cells/cell";
import {ALL_DEFAULT_CUSTOM_CELLS} from "../../models/cells/default-cells/custom-block/all.default.custom.cells";

@Component({
  selector: 'app-form-editing',
  templateUrl: './form-editing.component.html',
  styleUrls: ['./form-editing.component.css', '../editor.component.css']
})
export class FormEditingComponent {
  @Input() edit_mode: boolean = true;
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() selected_cell: GridPosition = new GridPosition(null, null);

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() custom_block_change = new EventEmitter<TableGenerator>();
  @Output() edit_mode_change = new EventEmitter<boolean>();

  new_cell_position: GridPosition = new GridPosition(null, null);
  deleted_cells: Cell[] = [];

  getEditModeButtonValue() {
    if (this.edit_mode) {
      return 'STOP EDITING';
    }
    return 'START EDITING';
  }

  toggleEditMode() {
    this.edit_mode = !this.edit_mode;
    this.edit_mode_change.emit(this.edit_mode);
  }

  onFinish() {
    this.edit_mode = false;
    this.edit_mode_change.emit(false);
    this.custom_block_change.emit(this.custom_block);
    this.next_step.emit()
  }

  enterCellCreation(cell_position: GridPosition) {
    this.new_cell_position = cell_position;
  }

  removeSelectedCell() {
    const cell_to_remove = this.custom_block.getCell(this.selected_cell);
    if (!ALL_DEFAULT_CUSTOM_CELLS.includes(cell_to_remove)) {
      this.deleted_cells.push(cell_to_remove);
    }
    this.custom_block.removeCell(this.selected_cell);
    this.selected_cell = new GridPosition(null, null);
    // this.custom_block_change.emit(this.custom_block);
  }

  onCellCreation(cell: Cell) {
    if (!this.selected_cell.isNull()) {
      this.custom_block.getCell(this.selected_cell).exitEditMode();
    }
    this.custom_block.addCell(cell, this.new_cell_position)
    this.new_cell_position.is_new = false;

    this.selected_cell = this.new_cell_position;
    cell.editing = true;
    this.new_cell_position = new GridPosition(null, null);
    // this.custom_block_change.emit(this.custom_block);
  }

  onCellReInsert(cell: Cell) {
    const deleted_index = this.deleted_cells.indexOf(cell);
    if (deleted_index !== -1) {
      this.deleted_cells.splice(deleted_index, 1);
    }
    this.onCellCreation(cell);
  }

  abortCellCreation() {
    this.new_cell_position = new GridPosition(null, null);
  }

  deselectCell() {
    this.custom_block.getCell(this.selected_cell).exitEditMode();
    this.selected_cell = new GridPosition(null, null);
  }
}
