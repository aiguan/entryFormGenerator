
export class Span {
  constructor(public editing: boolean = false) {
  }

  getHTMLCode(): string {
    return `
            <span></span>`;
  }

  exitEditMode() {
    this.editing = false;
  }

  isInEditMode(): boolean {
    return this.editing;
  }

  getBackgroundStyle(edit_mode: boolean = false) {
    let style: {'background'?: string} = {  };

    if (this.isInEditMode() && edit_mode) {
      style['background'] = '#b3b3b3'
    }
    return style;
  }
}
