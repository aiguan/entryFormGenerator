import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_cname',
  'CLUB',
  '',
  'The full club name can have hyphens &#13; or spaces, but no digits.',
  'off',
  '',
  '10.5em',
  null,
  null,
  null,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_cnicon',
  `Please type your club name. It can contain hyphens or spaces, but no digits.
We need only one of your code or name.
Correct your club name if you have moved clubs.
Tell the TD if you regularly play in several clubs.
If you don't belong to any club type simply "No Club".`
);


export const CLUB_NAME = new TwoLineInput(
  'Club Name',
  text_input,
  info_image);
