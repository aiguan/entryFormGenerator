import {Component, Input} from '@angular/core';
import {Span} from "../../../../models/spans/span";
import {ImageSpan} from "../../../../models/spans/image.span";
import {TextSpan} from "../../../../models/spans/text.span";

@Component({
  selector: 'app-span',
  templateUrl: './span.component.html',
  styleUrls: ['./span.component.css']
})
export class SpanComponent {
  @Input() span: Span = new Span();

  isImageSpan(): boolean {
    return this.span instanceof ImageSpan;
  }

  isTextSpan(): boolean {
    return this.span instanceof TextSpan;
  }

  getImageSpan(): ImageSpan {
    if (this.span instanceof ImageSpan) {
      return this.span;
    } else {
      return new ImageSpan("");
    }
  }

  getTextSpan(): TextSpan {
    if (this.span instanceof TextSpan) {
      return this.span;
    } else {
      return new TextSpan("");
    }
  }
}
