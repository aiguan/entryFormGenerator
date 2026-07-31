import {Component, Input} from '@angular/core';
import { ImageSpan } from 'src/app/models/spans/image.span';
import {ALIGN_OPTIONS, MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../../../models/constants";

@Component({
  selector: 'app-image-span-editing',
  templateUrl: './image-span-editing.component.html',
  styleUrls: ['./image-span-editing.component.css', '../../../editor.component.css', '../../form-editing.component.css']
})
export class ImageSpanEditingComponent {
  @Input() image_span: ImageSpan = new ImageSpan('');

  protected readonly ALIGN_OPTIONS = ALIGN_OPTIONS;
  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  // protected readonly SIZE_UNITS = SIZE_UNITS;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;

  // width_size :string = this.getWidthSize();
  // width_unit :string = this.getWidthUnit();

  // height_size :string = this.getHeightSize();
  // height_unit :string = this.getHeightUnit();

  // private getWidthSize(): string {
  //   return this.getSize(this.image_span.width);
  // }
  //
  // private getWidthUnit(): string {
  //   return this.getUnit(this.image_span.width);
  // }

  // private getHeightSize(): string {
  //   return this.getSize(this.image_span.height);
  // }
  //
  // private getHeightUnit(): string {
  //   return this.getUnit(this.image_span.height);
  // }
  //
  // private getSize(dimension: number | null) {
  //   if (dimension === null || dimension === '') {
  //     return '';
  //   }
  //   return parseFloat(dimension).toString();
  // }
  //
  // private getUnit(dimension: string | null) {
  //   if (dimension === null) {
  //     return '%';
  //   } else {
  //     let unit: string = dimension;
  //     for (let char of '0123456789.') {
  //       unit = unit.replaceAll(char, '');
  //     }
  //     return unit;
  //   }
  // }

  updateWidth() {
    this.image_span.width = Math.round(this.image_span.width)
    if (this.image_span.width < 0) {
      this.image_span.width = 0;
    }
  }

  // onWidthUnitChange(unit: string) {
  //   if (unit === "px" || unit === "pt" || unit === "em" || unit === "%") {
  //     this.image_span.width_unit = unit;
  //   }
  // }

  updateHeight() {
    this.image_span.height = Math.round(this.image_span.height)
    if (this.image_span.height < 0) {
      this.image_span.height = 0;
    }
  }

  // onHeightUnitChange(unit: string) {
  //   if (unit === "px" || unit === "pt" || unit === "em" || unit === "%") {
  //     this.image_span.height_unit = unit;
  //   }
  // }
}
