import {TitleGenerator} from "./title.generator";
import {Paragraph} from "./paragraph";
import {TextSpan} from "./spans/text.span";
import {ImageSpan} from "./spans/image.span";

export const TITLE_BLOCK = new TitleGenerator(
  [
    new Paragraph(
      [
        new TextSpan('Tournament name'),
        new ImageSpan('https://britgo.github.io/entryFormGenerator/assets/bga_logo.png', 170, 0)
      ],
      'xxx-large',
      'bold',
      'space-between')
  ]);
