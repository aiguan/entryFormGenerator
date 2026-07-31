import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {TextInput} from "../../../../../models/cells/form-entries/text.input";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY, SIZE_UNITS} from "../../../../../models/constants";
import {sanitizeString} from "../../../../../models/string.formatting";

@Component({
  selector: 'app-text-input-editing',
  templateUrl: './text-input-editing.component.html',
  styleUrls: [
    './text-input-editing.component.css',
    '../../../form-editing.component.css',
    '../../../../editor.component.css',
  ]
})
export class TextInputEditingComponent implements OnChanges{
  @Input() text_input: TextInput = new TextInput('id');

  @Output() id_change = new EventEmitter<string>()

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly SIZE_UNITS = SIZE_UNITS;

  max_length :number = this.getMaxLength();
  width_size :string = this.getWidthSize();
  width_unit :string = this.getWidthUnit();
  margin_top_size :string = this.getMarginTopSize();
  margin_top_unit :string = this.getMarginTopUnit();

  resetFromDropdown() {
    this.max_length = this.getMaxLength()
    this.width_size = this.getWidthSize();
    this.width_unit = this.getWidthUnit();
    this.margin_top_size = this.getMarginTopSize();
    this.margin_top_unit = this.getMarginTopUnit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['text_input'].firstChange) {
      this.resetFromDropdown();
    } else if (changes['text_input'].previousValue !== changes['text_input'].currentValue) {
      this.resetFromDropdown();
    }
  }

  onIdChange() {
    this.text_input.id = sanitizeString(this.text_input.id);
    this.id_change.emit(this.text_input.id);
  }

  onNameChange() {
    this.text_input.name = sanitizeString(this.text_input.name, '-').toUpperCase();
  }

  private getMaxLength() {
    return this.text_input.maxlength === null? -1: this.text_input.maxlength;
  }

  updateMaxLength() {
    if (this.max_length <= 0) {
      this.text_input.maxlength = null;
    } else {
      this.text_input.maxlength = this.max_length;
    }
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

  private getWidthSize() { return this.getSize(this.text_input.width); }
  private getWidthUnit() { return this.getUnit(this.text_input.width); }
  private getMarginTopSize() { return this.getSize(this.text_input.margin_top); }
  private getMarginTopUnit() { return this.getUnit(this.text_input.margin_top); }

  updateWidth() {
    if (this.width_size === '') {
      this.text_input.width = null;
    } else {
      this.text_input.width = parseFloat(this.width_size).toString() + this.width_unit;
    }
  }

  onWidthUnitChange(new_unit: string) {
    this.width_unit = new_unit;
    this.updateWidth();
  }

  updateMarginTop() {
    if (this.margin_top_size === '') {
      this.text_input.margin_top = null;
    } else {
      this.text_input.margin_top = parseFloat(this.margin_top_size).toString() + this.margin_top_unit;
    }
  }

  onMarginTopUnitChange(new_unit: string) {
    this.margin_top_unit = new_unit;
    this.updateMarginTop();
  }
}
