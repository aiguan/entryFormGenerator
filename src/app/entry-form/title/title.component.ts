import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TitleGenerator} from "../../models/title.generator";
import {GridPosition} from "../../models/grid.position";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title: TitleGenerator = new TitleGenerator([]);
  @Input() edit_mode: boolean = false;

  @Output() on_span_select= new EventEmitter<GridPosition>();

  processSpanSelection(paragraph_index: number, span_index: number) {
    // If we are in edit mode we toggle the selection.

    if (this.edit_mode) {

      const grid_position = new GridPosition(paragraph_index, span_index);
      let span = this.title.getSpan(grid_position);

      // Deselect if selected.
      if (span.isInEditMode()) {
        span.exitEditMode();
        this.on_span_select.emit(new GridPosition(null, null));
      } else { // Otherwise deselect everything else and select only this cell.
        this.title.exitEditMode();
        span.editing = true;
        this.on_span_select.emit(grid_position);
      }
    }
  }
}
