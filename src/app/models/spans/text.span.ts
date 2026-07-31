import {Span} from "./span";

export class TextSpan extends Span {
  override getHTMLCode(): string {
    return `
        <span style="font-size: ` + this.font_size + `; font-weight: ` + this.font_weight + `">
        ` + this.text + `
        </span>`;
  }

  constructor(public text: string,
              public font_size: 'inherit' | 'large' | 'larger' | 'medium' | 'small' | 'smaller' | 'x-large' | 'xx-large' | 'xxx-large' | 'x-small' | 'xx-small' | 'xxx-small' = 'inherit',
              public font_weight: 'inherit' | 'bold' | 'bolder' | 'lighter' | 'normal'  = 'inherit',
              editing: boolean = false) {
    super(editing);
  }

  getStyle() {
    return { 'font-size': this.font_size, 'font-weight': this.font_weight};
  }
}
