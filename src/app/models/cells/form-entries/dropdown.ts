import {FormEntry} from "./form.entry";

export class Option {
  constructor(public name: string,
              public selected: boolean = false,
              public value: string | null = null) {
  }

  getHTMLCode(): string {
    let HTMLCode = `
                        <option`;

    // Add value if any.
    if (this.value !== null) {
      HTMLCode = HTMLCode + ` value="` + this.value + `"`;
    }

    // Add selected if selected.
    if (this.selected) {
      HTMLCode = HTMLCode + ` selected="true"`;
    }

    // Add name and close option.
    HTMLCode = HTMLCode + `>`+ this.name+`</option>`;

    return HTMLCode;
  }
}

export class Dropdown extends FormEntry {
  constructor(id: string,
              public options: Option[],
              public description: string = '',
              public name: string = '',
              public width: string | null = null,
              public margin_bottom: string | null = null,
              public margin_top: string | null = null,
              private onchange: string | null = null,
              immutable: boolean = false,
              required:boolean = false) {
    super(id, immutable, required);
  }

  selectOption(selected_option: Option) {
    for (let option of this.options) {
      option.selected = option === selected_option;
    }
  }

  addOption(option: Option) {
    this.options.push(option);
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }

  removeAllOptions() {
    this.options = [];
  }

  override getHTMLCode(): string {
    // Initiate the select object.
    let HTMLCode: string = `
                <select id="`+this.id+`"`;

    // If the dropdown is required then we add the required class to it.
    if (this.required) {
      HTMLCode = HTMLCode + ` class="required-form-entry"`
    }

    // Add onchange if any.
    if (this.onchange !== '') {
      HTMLCode = HTMLCode + `
                        onchange="`+this.onchange+`"`;
    }

    // Add description if any.
    if (this.description !== '') {
      HTMLCode = HTMLCode + `
                        title="`+this.description+`"`;
    }

    // Add name if needed.
    if (this.name !== '') {
      HTMLCode = HTMLCode + `
                               name="`+this.getHTMLName()+`"`;
    }

    // Add style if any.
    if (this.isStyleSpecified()) {
      HTMLCode = HTMLCode + `
                        style="`;
      if (this.width !== null) {
        HTMLCode = HTMLCode + `
                               width: ` + this.width + `;`;
      }

      // Add margins if needed.
      if (this.margin_bottom !== null) {
        HTMLCode = HTMLCode + `
                               margin-bottom: ` + this.margin_bottom + `;`;
      }

      if (this.margin_top !== null) {
        HTMLCode = HTMLCode + `
                               margin-top: ` + this.margin_top + `;`;
      }

      HTMLCode = HTMLCode + `"`;
    }
    HTMLCode = HTMLCode + ">";

    // For every option add its HTML code.
    for (let option of this.options) {
      HTMLCode = HTMLCode + option.getHTMLCode();
    }

    // Close the select object.
    HTMLCode = HTMLCode + `
                </select>`
    return HTMLCode;
  }

  override getSetupJavascriptCode(): string {
    let i = 0;
    for (let option of this.options) {
      if (option.selected) {
        return `
        document.getElementById('`+this.id+`').options[`+i+`].selected=true;`
      }
      i = i + 1;
    }
    return '';
  }

  getStyle() {
    let style: { 'width'?: string, 'margin-bottom'?: string, 'margin-top'?: string } = {}
    if (this.width !== null) {
      style['width'] = this.width;
    }
    if (this.margin_bottom !== null) {
      style['margin-bottom'] = this.margin_bottom;
    }
    if (this.margin_top !== null) {
      style['margin-top'] = this.margin_top;
    }
    return style;
  }

  private isStyleSpecified() {
    return this.width !== null || this.margin_bottom !== null || this.margin_top !== null;
  }

  getNOptions() :number {
    return this.options.length
  }

  private getHTMLName() {
    if (this.immutable) {
      return this.name;
    }
    return "EXT-D-" + this.name;
  }
}
