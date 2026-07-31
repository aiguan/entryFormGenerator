import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DEFAULT_TOUR_CONFIG, TourConfig} from "../../models/tour.config";
import {MAT_TOOLTIP_POSITION, MAT_TOOLTIP_SHOW_DELAY} from "../../models/constants";
import {Dropdown, Option} from "../../models/cells/form-entries/dropdown";
import {PRICE_DROPDOWN} from "../../models/cells/default-cells/custom-block/price.dropdown";

@Component({
  selector: 'app-price-editing',
  templateUrl: './price-editing.component.html',
  styleUrls: ['./price-editing.component.css', "../form-editing/form-editing.component.css", "../editor.component.css"],
})
export class PriceEditingComponent {
  @Input() tour_config: TourConfig = DEFAULT_TOUR_CONFIG;
  @Input() price_dropdown: Dropdown = PRICE_DROPDOWN.dropdown;

  protected readonly adult_BGA_name: string = "Adult BGA member";
  protected readonly adult_BGA_value: string = "Adult BGA member";
  adult_BGA_price: number | null = null;

  protected readonly adult_non_BGA_name: string = "Adult BGA non-member";
  protected readonly adult_non_BGA_value: string = "adult-nonmem";
  adult_non_BGA_price: number | null = null;

  protected readonly adult_first_name: string = "Adult first rated tournament";
  protected readonly adult_first_value: string = "adult-first";
  adult_first_price: number | null = null;

  protected readonly youth_name: string = "Youth";
  protected readonly youth_value: string = "youth";
  youth_price: number | null = null;

  @Output() prev_step = new EventEmitter<void>();
  @Output() next_step = new EventEmitter<void>();
  @Output() tour_name_change = new EventEmitter<string>();
  protected readonly POSITION = MAT_TOOLTIP_POSITION;
  protected readonly SHOW_DELAY = MAT_TOOLTIP_SHOW_DELAY;

  updatePrices() {
    this.price_dropdown.removeAllOptions();
    this.price_dropdown.addOption(new Option("SELECT FEE CATEGORY AND AMOUNT", true, null));

    this.addPrice(this.adult_BGA_name, this.adult_BGA_value, this.adult_BGA_price);
    this.addPrice(this.adult_non_BGA_name, this.adult_non_BGA_value, this.adult_non_BGA_price);
    this.addPrice(this.adult_first_name, this.adult_first_value, this.adult_first_price);
    this.addPrice(this.youth_name, this.youth_value, this.youth_price);
  }

  addPrice(name: string, value: string, price: number | null = null) {
    if (price !== null && price >= 0) {
      this.price_dropdown.addOption(new Option(name + " – £" + price.toString(), false, value + "-" + price.toString()));
    }
  }

  isPriceSet(price: number | null): boolean {
    return price !== null && price >= 0;
  }

  onNextStep() {
    if (this.isPriceSet(this.adult_BGA_price) || this.isPriceSet(this.adult_non_BGA_price) || this.isPriceSet(this.adult_first_price) || this.isPriceSet(this.youth_price)) {
      this.updatePrices();
      this.next_step.emit();
    } else {
      alert("You must specify at least one price value.");
    }
  }
}
