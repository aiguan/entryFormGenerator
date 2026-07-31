import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Dropdown, Option} from "../../../../../models/cells/form-entries/dropdown";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY, SIZE_UNITS} from "../../../../../models/constants";
import {sanitizeString} from "../../../../../models/string.formatting";

@Component({
  selector: 'app-dropdown-editing',
  templateUrl: './dropdown-editing.component.html',
  styleUrls: [
    './dropdown-editing.component.css',
    '../../../form-editing.component.css',
    '../../../../editor.component.css',
  ]
})
export class DropdownEditingComponent implements OnChanges{
  @Input() dropdown: Dropdown = new Dropdown('id', [new Option('OPTION 1')], 'TOOLTIP')

  @Output() id_change = new EventEmitter<string>()

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly SIZE_UNITS = SIZE_UNITS;

  show_options: boolean = true;
  width_size :string = this.getWidthSize();
  width_unit :string = this.getWidthUnit();
  margin_bottom_size :string = this.getMarginBottomSize();
  margin_bottom_unit :string = this.getMarginBottomUnit();
  margin_top_size :string = this.getMarginTopSize();
  margin_top_unit :string = this.getMarginTopUnit();


  resetFromDropdown() {
    this.width_size = this.getWidthSize();
    this.width_unit = this.getWidthUnit();
    this.margin_bottom_size = this.getMarginBottomSize();
    this.margin_bottom_unit = this.getMarginBottomUnit();
    this.margin_top_size = this.getMarginTopSize();
    this.margin_top_unit = this.getMarginTopUnit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dropdown'].firstChange) {
      this.resetFromDropdown();
    } else if (changes['dropdown'].previousValue !== changes['dropdown'].currentValue) {
      this.resetFromDropdown();
    }
  }

  onIdChange() {
    this.dropdown.id = sanitizeString(this.dropdown.id);
    this.id_change.emit(this.dropdown.id);
  }

  onNameChange() {
    this.dropdown.name = sanitizeString(this.dropdown.name, '-').toUpperCase();
  }

  addOption() {
    this.dropdown.addOption(new Option('NEW OPTION', false, 'NEW OPTION'))
  }

  removeOption(index: number) {
    if (this.dropdown.getNOptions() > 1) {
      this.dropdown.removeOption(index)
    }
  }

  selectOption(option: Option) {
    this.dropdown.selectOption(option)
  }

  private getSize(size: string | null) {
    if (size === null || size === '') {
      return '';
    }
    return parseFloat(size).toString();
  }

  private getUnit(size: string | null) {
    if (size === null) {
      return 'em';
    } else {
      let unit: string = size;
      for (let char of '0123456789.') {
        unit = unit.replaceAll(char, '');
      }
      return unit;
    }
  }

  private getWidthSize() { return this.getSize(this.dropdown.width); }
  private getWidthUnit() { return this.getUnit(this.dropdown.width); }
  private getMarginBottomSize() { return this.getSize(this.dropdown.margin_bottom); }
  private getMarginBottomUnit() { return this.getUnit(this.dropdown.margin_bottom); }
  private getMarginTopSize() { return this.getSize(this.dropdown.margin_top); }
  private getMarginTopUnit() { return this.getUnit(this.dropdown.margin_top); }

  updateWidth() {
    if (this.width_size === '') {
      this.dropdown.width = null;
    } else {
      this.dropdown.width = parseFloat(this.width_size).toString() + this.width_unit;
    }
  }

  onWidthUnitChange(new_unit: string) {
    this.width_unit = new_unit;
    this.updateWidth();
  }

  updateMarginBottom() {
    if (this.margin_bottom_size === '') {
      this.dropdown.margin_bottom = null;
    } else {
      this.dropdown.margin_bottom = parseFloat(this.margin_bottom_size).toString() + this.margin_bottom_unit;
    }
  }

  onMarginBottomUnitChange(new_unit: string) {
    this.margin_bottom_unit = new_unit;
    this.updateMarginBottom();
  }

  updateMarginTop() {
    if (this.margin_top_size === '') {
      this.dropdown.margin_top = null;
    } else {
      this.dropdown.margin_top = parseFloat(this.margin_top_size).toString() + this.margin_top_unit;
    }
  }

  onMarginTopUnitChange(new_unit: string) {
    this.margin_top_unit = new_unit;
    this.updateMarginTop();
  }

  toggleShowOptions() {
    this.show_options = !this.show_options;
  }

  getToggleOptionsText() {
    return this.show_options? 'Hide options' : 'Show options';
  }
}
