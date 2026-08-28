import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";
import {TitleGenerator} from "../../models/title.generator";
import {isDefaultTitleBlock, reset_title_block, TITLE_BLOCK} from "../../models/title.region";

@Component({
  selector: 'app-tournament-name',
  templateUrl: './tournament-name.component.html',
  styleUrls: ['./tournament-name.component.css', '../editor.component.css']
})
export class TournamentNameComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  @Input() title_block: TitleGenerator = TITLE_BLOCK;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_name_change = new EventEmitter<string>();

  onNextStep() {
    if (this.tour_config.getTourName() === '') {
      alert('Tournament name must be specified.');
    } else {
      if (isDefaultTitleBlock(this.title_block)) {
        reset_title_block(this.title_block, this.tour_config.getEmptyTourTitle());
      }
      this.next_step.emit()
    }
  }
}
