import {Component, Input} from '@angular/core';
import {ImageSpan} from "../../../../../models/spans/image.span";

@Component({
  selector: 'app-image-span',
  templateUrl: './image-span.component.html',
  styleUrls: ['./image-span.component.css'],
})
export class ImageSpanComponent {
  @Input() image_span: ImageSpan = new ImageSpan("");

  getWidth(): number | "auto" {
    if (this.image_span.width === 0 || this.image_span.width === null) {
      console.log("returning null");
      return "auto"
    } else {
      return this.image_span.width;
    }
  }

  getHeight() {
    if (this.image_span.height === 0 || this.image_span.height === null) {
      return "auto"
    } else {
      return this.image_span.height;
    }
  }
}
