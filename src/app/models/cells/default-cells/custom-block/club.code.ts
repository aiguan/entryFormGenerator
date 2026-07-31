import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_ccode',
  'CODE-CB',
  '',
  'Club code letters or digits only (max 4 characters).',
  'off',
  '',
  '5.0em',
  null,
  null,
  null,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_clicon',
  `Type your club code here (1–4) characters.
  Or leave it blank and type your club name.`
);

export const CLUB_CODE = new TwoLineInput(
  'Club Code',
  text_input,
  info_image
);
