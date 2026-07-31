import {TitleGenerator} from "./title.generator";
import {Paragraph} from "./paragraph";
import {TextSpan} from "./spans/text.span";
import {ImageSpan} from "./spans/image.span";

export const TITLE_BLOCK = new TitleGenerator([generate_default_paragraph()]);

function generate_default_paragraph(title: string = 'Tournament name', logo_width: number = 170): Paragraph {
  return new Paragraph(
    [
      new TextSpan(title),
      new ImageSpan('https://raw.githubusercontent.com/britgo/entryFormGenerator/refs/heads/master/src/assets/bga_logo.png', logo_width, 0)
    ],
    'xxx-large',
    'bold',
    'space-between');
}


export function reset_title_block(title_block: TitleGenerator, title: string = 'Tournament name', logo_width: number = 170) {
  title_block.removeAllParagraphs();
  let paragraph: Paragraph = generate_default_paragraph(title, logo_width);
  title_block.addParagraph(paragraph);
  return;
}
