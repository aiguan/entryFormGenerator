import {Component} from '@angular/core';
import {TableGenerator} from "./models/table.generator";
import {EGD_SEARCH_BLOCK} from "./models/EGD.search.block";
import {CUSTOM_BLOCK} from "./models/custom.block";
import {PLAYER_EMAIL_BLOCK} from "./models/player.email.block";
import {GridPosition} from "./models/grid.position";
import {DEFAULT_TOUR_CONFIG, TourConfig} from "./models/tour.config";
import {PAGE_HEAD} from "./models/head";
import {getSystemFields} from "./models/system.fields";
import {processStringForInfoMessage} from "./models/string.formatting";
import {TOOLTIP} from "./models/tooltip";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  egd_search_block: TableGenerator = EGD_SEARCH_BLOCK;
  custom_block: TableGenerator = CUSTOM_BLOCK;
  player_email_block: TableGenerator = PLAYER_EMAIL_BLOCK;
  tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  DEFAULT_INFO_MESSAGE: string = `Either hover or click<br>on an info icon <span class="icon-i-new"> i </span><br>for help.<br>The fields with a "*" symbol are required.`;

  info_message: string = this.DEFAULT_INFO_MESSAGE;
  edit_mode: boolean = true;
  selected_cell: GridPosition = new GridPosition(null, null);
  editor_top: string = '0';

  processOnCellSelect(cellPosition: GridPosition) {
    this.selected_cell = cellPosition;
  }

  downloadDocuments() {
      this.downloadEntryForm()
      this.downloadTourConfig()
  }

  downloadEntryForm() {
    const blob = new Blob([this.generateHTMLCode()], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = this.tour_config.getTourBase()+"-form.html";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  downloadTourConfig() {
    const blob = new Blob([this.tour_config.getOutputText()], {type: 'application/octet-stream'});
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.download = "tour-config";
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.click();
  }

  updateCustomBlock(custom_block: TableGenerator) {
    this.custom_block = custom_block;
  }

  updateTourConfig(tour_config: TourConfig) {
    this.tour_config = tour_config;
  }

  updateEditMode(edit_mode: boolean) {
    this.edit_mode = edit_mode;
  }

  private generateHTMLCode() {
    let HTML_code: string = PAGE_HEAD;
    HTML_code = HTML_code + this.egd_search_block.getHTMLCode();
    HTML_code = HTML_code + this.custom_block.getHTMLCode();
    HTML_code = HTML_code + this.player_email_block.getHTMLCode();
    HTML_code = HTML_code + getSystemFields(this.custom_block, this.tour_config);
    return HTML_code;
  }

  setInfoMessage(message: string) {
    const new_info_message = processStringForInfoMessage(message);

    if (new_info_message === this.info_message) {
      this.info_message = this.DEFAULT_INFO_MESSAGE;
    } else {
      this.info_message = new_info_message;
    }
  }
}
