import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../models/table.generator";
import {EGD_SEARCH_BLOCK} from "../models/EGD.search.block";
import {CUSTOM_BLOCK} from "../models/custom.block";
import {PLAYER_EMAIL_BLOCK} from "../models/player.email.block";
import {GridPosition} from "../models/grid.position";
import {TitleGenerator} from "../models/title.generator";
import {TITLE_BLOCK} from "../models/title.region";


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  @Input() title_block: TitleGenerator = TITLE_BLOCK;
  @Input() egd_search_block: TableGenerator = EGD_SEARCH_BLOCK;
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() player_email_block: TableGenerator = PLAYER_EMAIL_BLOCK;
  @Input() edit_mode: "form" | "title"| null = "form"

  @Output() on_cell_select = new EventEmitter<GridPosition>();
  @Output() on_span_select = new EventEmitter<GridPosition>();
  @Output() change_height = new EventEmitter<number>();
  @Output() on_cell_describe= new EventEmitter<string>();

  processOnCellSelect(cellPosition: GridPosition) {
    this.on_cell_select.emit(cellPosition);
  }

  processOnSpanSelect(spanPosition: GridPosition) {
    this.on_span_select.emit(spanPosition);
  }

  processDescriptionChange(message: string) {
    this.on_cell_describe.emit(message);
  }

  isTitleEdit() {
    return this.edit_mode == "title";
  }

  isFormEdit() {
    return this.edit_mode == "form";
  }
}
