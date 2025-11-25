import {TwoLineDropdown} from "../../two.lines.cell";
import {Dropdown, Option} from "../../form-entries/dropdown";
import {InfoImage} from "../../form-entries/info.image";

const dropdown: Dropdown = new Dropdown(
  'id_lname',
  [
    new Option('SELECT FEE CATEGORY AND AMOUNT', true, ''),
    new Option('Adult BGA member – £??', false, 'adult-mem-??'),
    new Option('Adult BGA non-member – £??', false, 'adult-nonmem-??'),
    new Option('Adult first rated tournament – £??', false, 'adult-first-??'),
    new Option('Youth – £??', false, 'youth-??'),
  ],
  'Click the info button "i" for an explanation of terms.',
  'EXT-D-FEE',
  '38.3em',
  null,
  null,
  'set_lcode()',
  true,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_feeinfo',
  `𝐄𝐱𝐩𝐥𝐚𝐧𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐞𝐫𝐦𝐬
First rated tournament: you do not have an <a href='https://www.europeangodatabase.eu/EGD/'>EGD</a> rating. This will be because you have never played in a rated Go tournament in Europe since 1996.
Youth: under 18 on the day of the tournament. 
BGA member: you have an active membership of the BGA or another national association on the day of the tournament. You can <a href='https://www.britgo.org/join'>join the BGA</a> online; this helps to support promotion of Go in the UK and entitles you to reduced entry fees to tournaments.`
);

export const FEE = new TwoLineDropdown('You may be charged the highest fee if you enter no selection.', dropdown, info_image, 2);
