import {Span} from "./spans/span";
import {getPositiveResidue} from "./grid.position";

export class Paragraph {
  constructor(public spans: Span[],
              public font_size: 'inherit' | 'large' | 'larger' | 'medium' | 'small' | 'smaller' | 'x-large' | 'xx-large' | 'xxx-large' | 'x-small' | 'xx-small' | 'xxx-small' = 'xxx-large',
              public font_weight: 'inherit' | 'bold' | 'bolder' | 'lighter' | 'normal'  = 'bold',
              public justify_content:   'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset' = 'space-evenly') {
  }

  addSpan(span: Span, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.spans.push(span);
      return;
    }

    this.spans.splice(position, 0, span);
    return;
  }

  removeSpan(position: number): void {
    // Remove an element in the array.
    this.spans.splice(position, 1);
    return;
  }

  getSpan(position: number): Span {
    // Return the requested span.
    return this.spans[getPositiveResidue(position, this.getNSpans())];
  }

  changeSpan(new_span: Span, position: number) {
    // Return the requested span.
    this.spans[getPositiveResidue(position, this.getNSpans())] = new_span;
  }

  exitEditMode() {
    for (let span of this.spans) {
      span.exitEditMode();
    }
  }

  isInEditMode(): boolean {
    for (let span of this.spans) {
      if (span.isInEditMode()) {
        return true;
      }
    }
    return false;
  }

  getHTMLCode(): string {
    // Start by opening the table and fieldset.
    let HTMLCode = `
        <p style="display: flex; position: relative; width: 100%; justify-content: ` + this.justify_content + `; font-weight: ` + this.font_weight + `; font-size: ` + this.font_size + `;">`
    // Get the HTML code for every row.
    for (let span of this.spans) {
      HTMLCode = HTMLCode + span.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `
        </p>`;
    return HTMLCode;
  }

  isEmpty() {
    return this.getNSpans() === 0;
  }

  getNSpans() {
    return this.spans.length;
  }
}
