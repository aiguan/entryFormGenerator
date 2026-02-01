import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../../models/table.generator";
import {Cell} from "../../models/cells/cell";
import {GridPosition} from "../../models/grid.position";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() table: TableGenerator = new TableGenerator([]);
  @Input() edit_mode: boolean = false;

  @Output() on_cell_select= new EventEmitter<GridPosition>();
  @Output() on_cell_describe= new EventEmitter<string>();

  processCellSelection(row_index: number, cell_index: number, cell: Cell) {
    // If we are in edit mode we toggle the selection.
    if (this.edit_mode) {
      // Deselect if selected.
      if (cell.isInEditMode()) {
        cell.exitEditMode();
        this.on_cell_select.emit(new GridPosition(null, null))
      } else { // Otherwise deselect everything else and select only this cell.
        this.table.exitEditMode();
        cell.editing = true;
        this.on_cell_select.emit(new GridPosition(row_index, cell_index))
      }
    }
  }

  processDescriptionChange(cell: Cell) {
    this.on_cell_describe.emit(cell.getDescription());
  }

  // Required cells start with a "*" symbol.
  getIsRequiredChar(cell: Cell) {
    if (cell.isRequired()) {
      return "*";
    } else {
      return "";
    }
  }
}
