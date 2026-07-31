import {TwoLineDropdown} from "../../two.lines.cell";
import {Dropdown, Option} from "../../form-entries/dropdown";
import {InfoImage} from "../../form-entries/info.image";


const DROPDOWN = new Dropdown("FEE", [
    new Option("SELECT FEE CATEGORY AND AMOUNT", true, null),
    new Option("Adult BGA member – £??", false, "adult-mem-??"),
    new Option("Adult BGA non-member – £??", false, "adult-nonmem-??"),
    new Option("Adult first rated tournament – £??", false, "adult-first-??"),
    new Option("Youth – £??", false, "youth-??")
  ],
  'Click the info button "i" for an explanation of terms.', "FEE", "38.3em", null, null, null, false, true);

export const PRICE_DROPDOWN = new TwoLineDropdown('You may be charged the highest fee if you enter no selection.',
  DROPDOWN,
  new InfoImage("FEEicon",
  "<b>Explanation of terms</b><br>First rated tournament: you do not have an <a href='https://www.europeangodatabase.eu/EGD/'>EGD</a> rating. This will be because you have never played in a rated Go tournament in Europe since 1996.<br>Youth: under 18 on the day of the tournament.<br>BGA member: you have an active membership of the BGA or another national association on the day of the tournament. You can <a href='https://www.britgo.org/join'>join the BGA</a> online; this helps to support promotion of Go in the UK and entitles you to reduced entry fees to tournaments."
  ),
  2, null, "left")
