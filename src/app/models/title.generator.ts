import {throwError} from "rxjs";

import { getPositiveResidue, GridPosition } from "./grid.position";
import {Span} from "./spans/span";
import {Paragraph} from "./paragraph";


export class TitleGenerator {
  constructor(public paragraphs: Paragraph[]) {}

  addParagraph(paragraph: Paragraph, position: number = -1): void {
    // Push in the last position if position is not satisfied.
    if (position === -1) {
      this.paragraphs.push(paragraph);
      return;
    }

    this.paragraphs.splice(position, 0, paragraph);
    return;
  }

  removeParagraph(position: number): void {
    // Remove an element in the array.
    this.paragraphs.splice(position, 1);
    return;
  }

  removeAllParagraphs(): void {
    // Remove an element in the array.
    this.paragraphs = [];
    return;
  }

  getParagraph(position: number): Paragraph {
    // Get the requested row.
    return this.paragraphs[getPositiveResidue(position, this.getNParagraphs())];
  }

  // changeParagraph(new_paragraph: Paragraph, position: number) {
  //   // Get the requested paragraph.
  //   this.paragraphs[getPositiveResidue(position, this.getNParagraphs())] = new_paragraph;
  // }

  addSpan(span: Span, position: GridPosition): void {
    if (position.isNull()) {
      return;
    }

    if (position.is_new) {
      this.addParagraph(new Paragraph([]), position.getRowIndex());
    }
    const row = this.getParagraph(position.getRowIndex(this.getNParagraphs()))
    let pos = position.getCellIndex();
    if (pos !== row.getNSpans()) {
      position.getCellIndex(row.getNSpans())
    }
    row.addSpan(span, pos);
    return;
  }

  removeSpan(position: GridPosition): void {
    if (position.isNull()) {
      return;
    }

    // Get appropriate row and remove the cell from there.
    const row_index: number = position.getRowIndex(this.getNParagraphs());
    const row = this.getParagraph(row_index);
    row.removeSpan(position.getCellIndex(row.getNSpans()));

    // If there are no cells left in the row then we remove the row too.
    if (row.isEmpty()) {
      this.removeParagraph(row_index);
    }
    return;
  }

  getSpan(position: GridPosition): Span {
    if (position.isNull()) {
      throwError(() => new Error('position should not be null to get span.'));
    }

    const row = this.getParagraph(position.getRowIndex(this.getNParagraphs()));
    return row.getSpan(position.getCellIndex(row.getNSpans()));
  }

  // changeSpan(new_span: Span, position: GridPosition){
  //   if (position.isNull()) {
  //     throwError(() => new Error('position should not be null to get span.'));
  //   }
  //
  //   const new_paragraph = this.getParagraph(position.getRowIndex(this.getNParagraphs()));
  //   new_paragraph.changeSpan(new_span, position.getCellIndex(new_paragraph.getNSpans()));
  //   this.changeParagraph(new_paragraph, position.getRowIndex(this.getNParagraphs()))
  // }

  exitEditMode() {
    for (let paragraph of this.paragraphs) {
      paragraph.exitEditMode();
    }
  }

  // getAllSpans(): Span[] {
  //   let spans: Span[] = [];
  //   for (let paragraph of this.paragraphs) {
  //     for (let span of paragraph.spans) {
  //       spans.push(span);
  //     }
  //   }
  //   return spans;
  // }

  getHTMLCode(): string {
    if (this.paragraphs.length == 0) { return ""; }
    // Start by opening the table and fieldset.
    let HTMLCode = `<div class="tour-title">
`
    // Get the HTML code for every row.
    for (let paragraph of this.paragraphs) {
      HTMLCode = HTMLCode + paragraph.getHTMLCode();
    }

    // Close table and fieldset.
    HTMLCode = HTMLCode + `
</div>
`;
    return HTMLCode;
  }

  getNParagraphs() {
    return this.paragraphs.length;
  }

  getNewSpanPosition(): GridPosition {
    return new GridPosition(this.getNParagraphs(), 0, true);
  }
}
