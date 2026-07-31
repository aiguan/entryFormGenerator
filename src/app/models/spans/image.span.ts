import {Span} from "./span";

export class ImageSpan extends Span {
  constructor(public source: string,
              public width: number = 0,
              // public width_unit: 'px' | 'pt' | 'em' | '%' = "em",
              public height: number = 0,
              // public height_unit: 'px' | 'pt' | 'em' | '%' = "em",
              editing: boolean = false) {
    super(editing);
  }

  sanitizeText(description: string): string {
    return description.replaceAll("\"", "'");
  }

  getWidth(): string {
    if (this.width !== 0 && this.width !== null) {
      return this.width.toString();
    } else {
      return "auto";
    }
  }

  getHeight(): string {
    if (this.height !== 0 && this.width !== null) {
      return this.height.toString();
    } else {
      return "auto";
    }
  }

  getSource(): string {
    return this.sanitizeText(this.source);
  }

  override getHTMLCode(): string {
    return `
        <img src="` + this.getSource() + `"
             width="` + this.getWidth() + `"
             height="` + this.getHeight() + `"
             alt="logo"/>`;
  }
}
