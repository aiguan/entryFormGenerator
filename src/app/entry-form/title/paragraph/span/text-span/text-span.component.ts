import {Component, Input} from '@angular/core';
import {TextSpan} from "../../../../../models/spans/text.span";

@Component({
  selector: 'app-text-span',
  templateUrl: './text-span.component.html',
  styleUrls: ['./text-span.component.css']
})
export class TextSpanComponent {
  @Input() text_span: TextSpan = new TextSpan("");
}
