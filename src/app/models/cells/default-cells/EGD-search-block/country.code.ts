import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";
import {TwoLineInput} from "../../two.lines.cell";

const text_input = new TextInput(
  'id_lsearch',
  '',
  'ISO code',
  '',
  'off',
  'UK',
  '5.0em',
  2,
  `handle_keyup_qdata('id_lsearch', event)`,
  null,
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_slcode',
  `You can change the two-character country code if needed.
This will start a new search.`
);

export const EGD_BLOCK_COUNTRY_CODE = new TwoLineInput(
  'Country Code',
  text_input,
  info_image,
  3,
  null,
);
