import {Component, Input} from '@angular/core';
import {Announcement} from "../../../../../models/cells/form-entries/announcement";
import {
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  MAT_TOOLTIP_POSITION,
  MAT_TOOLTIP_SHOW_DELAY
} from "../../../../../models/constants";

@Component({
  selector: 'app-announcement-editing',
  templateUrl: './announcement-editing.component.html',
  styleUrls: ['./announcement-editing.component.css', '../../../../editor.component.css']
})
export class AnnouncementEditingComponent {
  @Input() announcement = new Announcement('');

  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;
  protected readonly FONT_SIZE_OPTIONS = FONT_SIZE_OPTIONS;
  protected readonly FONT_WEIGHT_OPTIONS = FONT_WEIGHT_OPTIONS;

  onFontSizeChange(font_size: string) {
    if (
      font_size !== 'inherit' &&
      font_size !== 'large' &&
      font_size !== 'larger' &&
      font_size !== 'medium' &&
      font_size !== 'small' &&
      font_size !== 'smaller' &&
      font_size !== 'x-large' &&
      font_size !== 'xx-large' &&
      font_size !== 'xxx-large' &&
      font_size !== 'x-small' &&
      font_size !== 'xx-small' &&
      font_size !== 'xxx-small'
    ) {
      this.announcement.font_size = 'inherit';
    } else {
      this.announcement.font_size = font_size;
    }
  }

  onFontWeightChange(font_weight: string) {
    if (
      font_weight !== 'inherit' &&
      font_weight !== 'bold' &&
      font_weight !== 'bolder' &&
      font_weight !== 'lighter' &&
      font_weight !== 'normal'
    ) {
      this.announcement.font_weight = 'inherit';
    } else {
      this.announcement.font_weight = font_weight;
    }
  }
}
