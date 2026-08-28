import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableGenerator} from "../models/table.generator";
import {CUSTOM_BLOCK} from "../models/custom.block";
import {GridPosition} from "../models/grid.position";
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../models/tour.config";
import {TitleGenerator} from "../models/title.generator";
import {TITLE_BLOCK} from "../models/title.region";
import {Dropdown} from "../models/cells/form-entries/dropdown";
import {PRICE_DROPDOWN} from "../models/cells/default-cells/custom-block/price.dropdown";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @Input() custom_block: TableGenerator = CUSTOM_BLOCK;
  @Input() title_block: TitleGenerator = TITLE_BLOCK;
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  @Input() price_dropdown: Dropdown = PRICE_DROPDOWN.dropdown;
  @Input() selected_cell: GridPosition = new GridPosition(null, null);
  @Input() selected_span: GridPosition = new GridPosition(null, null);
  @Input() edit_mode: "form" | "title" | null = null;

  @Output() finish = new EventEmitter<void>();
  @Output() custom_block_change = new EventEmitter<TableGenerator>();
  @Output() title_block_change = new EventEmitter<TitleGenerator>();
  @Output() tour_config_change = new EventEmitter<TourConfig>();
  @Output() edit_mode_change = new EventEmitter<"form" | "title"| null>();

  TOURNAMENT_NAME_EDITING_STEP: number  = 0;
  TOURNAMENT_TITLE_EDITING_STEP: number  = 1;
  PRICE_EDITING_STEP: number = 2;
  FORM_EDITING_STEP: number = 3;
  TOURNAMENT_DIRECTOR_EDITING_STEP: number = 4;
  TOURNAMENT_DIRECTOR_EMAIL_STEP: number = 5;
  DRAW_MASTER_STEP: number = 6;
  CONFIRM_STEP: number = 7;
  FIRST_EDITING_STEP: number = this.TOURNAMENT_NAME_EDITING_STEP;
  LAST_EDITING_STEP: number = this.CONFIRM_STEP;
  editing_step: number = this.TOURNAMENT_NAME_EDITING_STEP;

  changeEditingStep(change: number) {
    let new_editing_step = Math.min(Math.max(this.FIRST_EDITING_STEP, change + this.editing_step), this.LAST_EDITING_STEP);

    // Some editing step changes might interfere with further edits.
    if (change < 0) {
      if (new_editing_step === this.TOURNAMENT_TITLE_EDITING_STEP) {
        if (!confirm("Are you sure you wish to go back to title editing? If you have done further changes to the title those might be lost by performing this action.")) {
          return;
        }
      } else if (new_editing_step === this.PRICE_EDITING_STEP) {
        if (!confirm("Are you sure you wish to go back to price editing? If you have done further changes to the prices those might be lost by performing this action.")) {
          return;
        }
      }
    }

    this.editing_step = new_editing_step;

    if (this.editing_step !== this.FORM_EDITING_STEP) {
      this.edit_mode = null;
    }
    this.edit_mode_change.emit(this.edit_mode);
  }

  onFinish() {
    this.finish.emit();
  }

  onCustomBlockChange(custom_block: TableGenerator) {
    this.custom_block = custom_block;
    this.custom_block_change.emit(custom_block);
  }

  onTitleBlockChange(title_block: TitleGenerator) {
    this.title_block = title_block;
    this.title_block_change.emit(title_block);
  }

  onTourNameChange(tour_name: string) {
    this.tour_config.tour_name = tour_name;
    this.tour_config_change.emit(this.tour_config);
  }

  onTourTitleChange(tour_title: string) {
    this.tour_config.tour_title = tour_title;
    this.tour_config_change.emit(this.tour_config);
  }

  onTDChange(tour_director: string) {
    this.tour_config.tour_director = tour_director;
    this.tour_config_change.emit(this.tour_config);
  }

  onTDEmailChange(td_email: string) {
    this.tour_config.td_email = td_email;
    this.tour_config_change.emit(this.tour_config);
  }

  onDMEmailChange(dm_email: string) {
    this.tour_config.dm_email = dm_email;
    this.tour_config_change.emit(this.tour_config);
  }

  updateEditMode(edit_mode:  "form" | "title"| null) {
    this.edit_mode = edit_mode;
    this.edit_mode_change.emit(edit_mode);
  }
}
