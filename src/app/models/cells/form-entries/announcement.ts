;

import {FormEntry} from "./form.entry";

export class Announcement extends FormEntry {
  constructor(public text: string,
              public font_size: 'inherit' | 'large' | 'larger' | 'medium' | 'small' | 'smaller' | 'x-large' | 'xx-large' | 'xxx-large' | 'x-small' | 'xx-small' | 'xxx-small' = 'inherit',
              public font_weight: 'inherit' | 'bold' | 'bolder' | 'lighter' | 'normal'  = 'inherit') {
    super('id', false);
  }

  override getHTMLCode(): string {
    // Button is formed by the following single input.
    return `
                <span style="font-size: ` + this.font_size + `; font-weight: ` + this.font_weight + `">
                ` + this.text + `
                </span>`;
  }

  getStyle() {
    return { 'font-size': this.font_size, 'font-weight': this.font_weight};
  }
}
