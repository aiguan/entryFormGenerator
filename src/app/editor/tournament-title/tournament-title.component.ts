import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";
import {TitleGenerator} from "../../models/title.generator";
import {reset_title_block, TITLE_BLOCK} from "../../models/title.region";

@Component({
  selector: 'app-tournament-title',
  templateUrl: './tournament-title.component.html',
  styleUrls: ['./tournament-title.component.css', '../editor.component.css', "../form-editing/form-editing.component.css"]
})
export class TournamentTitleComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  @Input() title_block: TitleGenerator = TITLE_BLOCK;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_title_change = new EventEmitter<string>();
  logo_width: number = 170;

  onTitleChange() {
    const tour_title = this.tour_config.getTourTitle();
    reset_title_block(this.title_block, tour_title, this.logo_width);
    this.tour_title_change.emit(tour_title);
  }
}
