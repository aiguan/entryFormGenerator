import {Button} from "../../form-entries/button";
import {OneLineButton} from "../../one.line.cell";
import {InfoImage} from "../../form-entries/info.image";

const button = new Button(
  'id_submit',
  'Submit',
  'The form data is sanitised and you will &#13; be asked to confirm changes made',
  'button',
  true,
  'submit_entry()',
  true,
);

const info_image: InfoImage = new InfoImage(
  'id_suicon',
  `If you need to make a correction after you submit the form, please just email the Tournament Director and <strong>do not</strong> submit the form again. Thanks!`
);

export const SUBMIT = new OneLineButton('', button, info_image);
