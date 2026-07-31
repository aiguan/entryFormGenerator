import {Component, EventEmitter, Output} from '@angular/core';
import {Span} from "../../../models/spans/span";
import {TextSpan} from "../../../models/spans/text.span";
import {ImageSpan} from "../../../models/spans/image.span";

@Component({
  selector: 'app-span-creation',
  templateUrl: './span-creation.component.html',
  styleUrls: ['./span-creation.component.css', '../../editor.component.css']
})
export class SpanCreationComponent {
  @Output() create_span = new EventEmitter<Span>();
  @Output() back = new EventEmitter<void>();


  createTextSpan() {
    this.create_span.emit(new TextSpan('Tournament title', "inherit", "inherit"));
  }

  createImageSpan() {
    this.create_span.emit(new ImageSpan('https://britgo.github.io/entryFormGenerator/assets/bga_logo.png', 170, 0));
  }
}
