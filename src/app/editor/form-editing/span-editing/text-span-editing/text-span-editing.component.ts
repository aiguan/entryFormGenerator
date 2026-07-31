import {Component, Input} from '@angular/core';
import {TextSpan} from "../../../../models/spans/text.span";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY, FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS} from "../../../../models/constants";

@Component({
  selector: 'app-text-span-editing',
  templateUrl: './text-span-editing.component.html',
  styleUrls: ['./text-span-editing.component.css', '../../../editor.component.css', '../../form-editing.component.css']
})
export class TextSpanEditingComponent {
  @Input() text_span: TextSpan = new TextSpan('');

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
  protected readonly FONT_WEIGHT_OPTIONS = FONT_WEIGHT_OPTIONS;

  onFontSizeChange(font_size: any) {
    this.text_span.font_size = font_size;
  }

  onFontWeightChange(font_weight: any) {
    this.text_span.font_weight = font_weight;
  }
}
