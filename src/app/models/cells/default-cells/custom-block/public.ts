import {OneLineCheckbox} from "../../one.line.cell";
import {InfoImage} from "../../form-entries/info.image";
import {Checkbox} from "../../form-entries/checkbox";


const checkbox: Checkbox = new Checkbox(
  'id_public',
  'PUBLIC',
  true,
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_puicon',
  `Untick if you wish to remain anonymous on the entry list (only your grade will appear).
A full results list will be submitted to the BGA and used in line with the <a href='https://www.britgo.org/privacynotice'>BGA Privacy Policy<a>.`,
);

export const PUBLIC = new OneLineCheckbox(
  'Public entry?',
  checkbox,
  info_image,
);
