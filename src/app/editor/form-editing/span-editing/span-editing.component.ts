import {Component, Input} from '@angular/core';
import {TextSpan} from "../../../models/spans/text.span";
import {Span} from "../../../models/spans/span";
import { ImageSpan } from 'src/app/models/spans/image.span';
import {Paragraph} from "../../../models/paragraph";

@Component({
  selector: 'app-span-editing',
  templateUrl: './span-editing.component.html',
  styleUrls: ['./span-editing.component.css', '../form-editing.component.css']
})
export class SpanEditingComponent {
  @Input() span: Span = new TextSpan('');
  @Input() paragraph: Paragraph = new Paragraph([]);

  isTextSpan() {
    return this.span instanceof TextSpan;
  }

  isImageSpan() {
    return this.span instanceof ImageSpan;
  }

  getTextSpan(): TextSpan {
    if (this.span instanceof TextSpan) {
      return this.span;
    } else {
      return new TextSpan("");
    }
  }

  getImageSpan(): ImageSpan {
    if (this.span instanceof ImageSpan) {
      return this.span;
    } else {
      return new ImageSpan("");
    }
  }
}
