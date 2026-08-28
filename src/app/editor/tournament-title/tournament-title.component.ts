import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";
import {TitleGenerator} from "../../models/title.generator";
import {reset_title_block, TITLE_BLOCK} from "../../models/title.region";
import {ImageSpan} from "../../models/spans/image.span";

@Component({
  selector: 'app-tournament-title',
  templateUrl: './tournament-title.component.html',
  styleUrls: ['./tournament-title.component.css', '../editor.component.css', "../form-editing/form-editing.component.css"]
})
export class TournamentTitleComponent implements OnInit {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  @Input() title_block: TitleGenerator = TITLE_BLOCK;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_title_change = new EventEmitter<string>();

  logo_width: number = 170;

  ngOnInit(): void {
    // If the paragraph is the default one we reset the title block width.
    let paragraphs = this.title_block.paragraphs;
    if (paragraphs.length === 1) {
      let spans = paragraphs[0].spans;
      if (spans.length === 2) {
        let image_span = spans[1];
        if (image_span instanceof ImageSpan) {
          this.logo_width = image_span.width;
        }
      }
    }
  }

  onTitleChange() {
    const tour_title = this.tour_config.getTourTitle();
    reset_title_block(this.title_block, tour_title, this.logo_width);
    this.tour_title_change.emit(tour_title);
  }
}
