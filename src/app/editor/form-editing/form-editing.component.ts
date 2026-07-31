import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../../models/table.generator";
import {CUSTOM_BLOCK} from "../../models/custom.block";
import {GridPosition} from "../../models/grid.position";
import {Cell} from "../../models/cells/cell";
import {ALL_DEFAULT_CUSTOM_CELLS} from "../../models/cells/default-cells/custom-block/all.default.custom.cells";
import {TitleGenerator} from "../../models/title.generator";
import {TITLE_BLOCK} from "../../models/title.region";
import {Span} from "../../models/spans/span";

@Component({
  selector: 'app-form-editing',
  templateUrl: './form-editing.component.html',
  styleUrls: ['./form-editing.component.css', '../editor.component.css']
})
export class FormEditingComponent {
  @Input() edit_mode: "form" | "title" | null = "form";
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() title_block: TitleGenerator = TITLE_BLOCK;
  @Input() selected_cell: GridPosition = new GridPosition(null, null);
  @Input() selected_span: GridPosition = new GridPosition(null, null);

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() custom_block_change = new EventEmitter<TableGenerator>();
  @Output() title_block_change = new EventEmitter<TitleGenerator>();
  @Output() edit_mode_change = new EventEmitter<"form" | "title" | null>();

  new_cell_position: GridPosition = new GridPosition(null, null);
  new_span_position: GridPosition = new GridPosition(null, null);
  deleted_cells: Cell[] = [];

  enterTitleEditing() { this.changeEditMode("title"); }
  enterFormEditing() { this.changeEditMode("form"); }
  exitEditMode() { this.changeEditMode(null); }

  changeEditMode(edit_mode: "form" | "title" | null) {
    this.edit_mode = edit_mode;
    this.edit_mode_change.emit(this.edit_mode);
  }

  getEditingText() {
    if (this.edit_mode == "form") {
      return "Editing main form";
    } else if (this.edit_mode == "title") {
      return "Editing title";
    } else {
      return "Editing off";
    }
  }

  onFinish() {
    this.edit_mode = null;
    this.edit_mode_change.emit(null);
    this.custom_block_change.emit(this.custom_block);
    this.title_block_change.emit(this.title_block);
    this.next_step.emit()
  }

  enterCellCreation(cell_position: GridPosition) {
    this.new_cell_position = cell_position;
  }

  enterSpanCreation(span_position: GridPosition) {
    this.new_span_position = span_position;
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

  removeSelectedSpan() {
    this.title_block.removeSpan(this.selected_span);
    this.selected_span = new GridPosition(null, null);
    // this.title_block_change.emit(this.title_block);
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

  onSpanCreation(span: Span) {
    if (!this.selected_span.isNull()) {
      this.title_block.getSpan(this.selected_span).exitEditMode();
    }
    this.title_block.addSpan(span, this.new_span_position)
    this.new_span_position.is_new = false;

    this.selected_span = this.new_span_position;
    span.editing = true;
    this.new_span_position = new GridPosition(null, null);
    // this.title_block_change.emit(this.title_block);
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

  abortSpanCreation() {
    this.new_span_position = new GridPosition(null, null);
  }

  deselectCell() {
    this.custom_block.getCell(this.selected_cell).exitEditMode();
    this.selected_cell = new GridPosition(null, null);
  }

  deselectSpan() {
    this.title_block.getSpan(this.selected_span).exitEditMode();
    this.selected_span = new GridPosition(null, null);
  }

}
