import {Component, Input} from '@angular/core';
import {Paragraph} from "../../../../models/paragraph";
import {JUSTIFY_CONTENT_OPTIONS, MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY, FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS} from "../../../../models/constants";

@Component({
  selector: 'app-paragraph-editing',
  templateUrl: './paragraph-editing.component.html',
  styleUrls: ['./paragraph-editing.component.css', '../../../editor.component.css']
})
export class ParagraphEditingComponent {
  @Input() paragraph: Paragraph = new Paragraph([]);

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly JUSTIFY_CONTENT_OPTIONS = JUSTIFY_CONTENT_OPTIONS;
  protected readonly FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
  protected readonly FONT_WEIGHT_OPTIONS = FONT_WEIGHT_OPTIONS;

  onFontSizeChange(font_size: any) {
    this.paragraph.font_size = font_size;
  }

  onFontWeightChange(font_weight: any) {
    this.paragraph.font_weight = font_weight;
  }

  onJustifyContentChange(justify_content: any) {
    this.paragraph.justify_content = justify_content;
  }

}
