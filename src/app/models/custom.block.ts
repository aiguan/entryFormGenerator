import {TableGenerator} from "./table.generator";
import {FAMILY_NAME} from "./cells/default-cells/custom-block/family.name";
import {GIVEN_NAME} from "./cells/default-cells/custom-block/given.name";
import {CUSTOM_BLOCK_COUNTRY_CODE} from "./cells/default-cells/custom-block/country.code";
import {COUNTRY_NAME} from "./cells/default-cells/custom-block/country.name";
import {CLUB_CODE} from "./cells/default-cells/custom-block/club.code";
import {CLUB_NAME} from "./cells/default-cells/custom-block/club.name";
import {GRADE} from "./cells/default-cells/custom-block/grade";
import {STRENGTH} from "./cells/default-cells/custom-block/strength";
import {PLAY_ALL} from "./cells/default-cells/custom-block/play.all";
import {PUBLIC} from "./cells/default-cells/custom-block/public";
import {EmptyRow, Row} from "./row";
import {PRICE_SEPARATOR} from "./cells/default-cells/custom-block/price.separator";
import {PRICE_ANNOUNCEMENT} from "./cells/default-cells/custom-block/price.announcement";
import {PRICE_DROPDOWN} from "./cells/default-cells/custom-block/price.dropdown";

export const CUSTOM_BLOCK = new TableGenerator(
  [
    new Row([FAMILY_NAME]),
    new Row([GIVEN_NAME]),
    new Row([CUSTOM_BLOCK_COUNTRY_CODE, COUNTRY_NAME]),
    new EmptyRow(),
    new Row([CLUB_CODE, CLUB_NAME]),
    new Row([GRADE, STRENGTH]),
    new EmptyRow(),
    new Row([PLAY_ALL]),
    /*
    new Row([MEMBER]),
    new Row([YOUTH]),
    new Row([FIRST]),
    */
    new Row([PUBLIC]),
    new Row([PRICE_SEPARATOR]),
    new Row([PRICE_ANNOUNCEMENT]),
    new Row([PRICE_DROPDOWN]),
  ]
);
