import {TwoLineInput} from "../../two.lines.cell";
import {TextInput} from "../../form-entries/text.input";
import {InfoImage} from "../../form-entries/info.image";

const text_input: TextInput = new TextInput(
  'id_fname',
  'FAMILY',
  '',
  'A family name may not be empty.',
  'off',
  '',
  '38.3em',
  42,
  null,
  null,
  true
);

const info_image: InfoImage = new InfoImage(
  'id_finfo',
  `You can edit the fields in this section if your EGD details are incorrect.
A family name may contain a hyphen (-), apostrophe ('), space ( ), or underscore (_), but must not be empty.`
);

export const FAMILY_NAME = new TwoLineInput(
  'Family Name',
  text_input,
  info_image,
  2
);
