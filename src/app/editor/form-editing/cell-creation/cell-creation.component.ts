import {Component, EventEmitter, Input, Output} from '@angular/core';
import {v4 as uuid} from 'uuid';

import {Cell, EmptyCell} from "../../../models/cells/cell";
import {CUSTOM_BLOCK} from "../../../models/custom.block";
import {OneLineCell, OneLineCheckbox, OneLineDropdown, OneLineInput} from "../../../models/cells/one.line.cell";
import {TwoLineDropdown, TwoLineInput, TwoLinesCell} from "../../../models/cells/two.lines.cell";
import {ALL_DEFAULT_CUSTOM_CELLS} from "../../../models/cells/default-cells/custom-block/all.default.custom.cells";
import {TextInput} from "../../../models/cells/form-entries/text.input";
import {InfoImage} from "../../../models/cells/form-entries/info.image";
import {Dropdown, Option} from "../../../models/cells/form-entries/dropdown";
import {Checkbox} from "../../../models/cells/form-entries/checkbox";
import {sanitizeString} from "../../../models/string.formatting";
import {AnnouncementCell} from "../../../models/cells/announcement.cell";
import {Announcement} from "../../../models/cells/form-entries/announcement";

@Component({
  selector: 'app-cell-creation',
  templateUrl: './cell-creation.component.html',
  styleUrls: ['./cell-creation.component.css', '../../editor.component.css']
})
export class CellCreationComponent {
  @Input() custom_block = CUSTOM_BLOCK;
  @Input() deleted_cells: Cell[] = [];

  @Output() create_cell = new EventEmitter<Cell>();
  @Output() re_insert_cell = new EventEmitter<Cell>();
  @Output() back = new EventEmitter<void>();

  pre_made_cell_mode: boolean = false;
  deleted_cell_mode: boolean = false;
  one_line_cell_mode: boolean = true;
  two_lines_cell_mode: boolean = false;

  createEmptyCell() {
    this.create_cell.emit(new EmptyCell())
  }

  createAnnouncementCell() {
    this.create_cell.emit(new AnnouncementCell(new Announcement('')));
  }

  deselectAll() {
    this.pre_made_cell_mode = false;
    this.deleted_cell_mode = false;
    this.one_line_cell_mode = false;
    this.two_lines_cell_mode = false;
  }

  enterPreMadeCellMode() {
    this.deselectAll();
    this.pre_made_cell_mode = true;
  }

  enterDeletedCellMode() {
    this.deselectAll();
    this.deleted_cell_mode = true;
  }

  enterOneLineCellMode() {
    this.deselectAll();
    this.one_line_cell_mode = true;
  }

  enterTwoLinesCellMode() {
    this.deselectAll();
    this.two_lines_cell_mode = true;
  }

  getButtonClass(selected: boolean) {
    return {
      'in-control': true,
      'tf_larger': true,
      'selected': selected
    };
  }

  getPreMadeCells() :Cell[] {
    const output: Cell[] = [];
    const all_custom_cells: Cell[] = this.custom_block.getAllCells();
    for (let cell of ALL_DEFAULT_CUSTOM_CELLS) {
      if (!all_custom_cells.includes(cell)) {
        output.push(cell);
      }
    }
    return output;
  }

  preMadeCellsExist() :boolean {
    return this.getPreMadeCells().length !== 0;
  }

  deletedCellsExist() :boolean {
    return this.deleted_cells.length !== 0;
  }

  getOneLineCells() :OneLineCell[] {
    const input_id = sanitizeString(uuid());
    const checkbox_id = sanitizeString(uuid());
    return [
      new OneLineInput(
        'Text input',
        new TextInput(input_id, 'TEXT-INPUT'),
        new InfoImage(input_id+'icon', 'DESCRIPTION')
      ),
      new OneLineDropdown(
        'Dropdown',
        new Dropdown(
          sanitizeString(uuid()),
          [new Option('OPTION 1', true, 'OPTION 1')],
          '',
          'DROPDOWN',
        ),
        null
      ),
      new OneLineCheckbox(
        'Checkbox',
        new Checkbox(checkbox_id, 'CHECKBOX', false),
        new InfoImage(checkbox_id+'icon', 'DESCRIPTION')
      ),
    ];
  }

  getTwoLinesCells() :TwoLinesCell[] {
    return [
      new TwoLineInput(
        'Text input',
        new TextInput(sanitizeString(uuid()), 'TEXT-INPUT'),
        new InfoImage(sanitizeString(uuid()), 'DESCRIPTION'),
      ),
      new TwoLineDropdown(
        'Dropdown',
        new Dropdown(
          sanitizeString(uuid()),
          [new Option('OPTION 1', true, 'OPTION 1')],
          '',
          'DROPDOWN',
        ),
        null
      ),
    ];
  }

  onCellSelect(cell: Cell, is_deleted_cell: boolean = false) {
    if (is_deleted_cell){
      this.re_insert_cell.emit(cell);
    } else {
      this.create_cell.emit(cell);
    }
  }
}
