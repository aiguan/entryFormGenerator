import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Paragraph} from "../../../models/paragraph";

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  @Input() paragraph: Paragraph = new Paragraph([]);
  @Input() edit_mode: boolean = false;

  @Output() on_span_select= new EventEmitter<number>();


  processSpanSelection(span_index: number) {
    this.on_span_select.emit(span_index);
  }
}
