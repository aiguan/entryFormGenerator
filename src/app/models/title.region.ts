import {TitleGenerator} from "./title.generator";
import {Paragraph} from "./paragraph";
import {TextSpan} from "./spans/text.span";
import {ImageSpan} from "./spans/image.span";

export const TITLE_BLOCK = new TitleGenerator([generate_default_paragraph()]);
export const DEFAULT_TITLE_BLOCK_LOGO_WIDTH: number = 170
export const DEFAULT_TITLE_BLOCK_TITLE: string = "Tournament name"

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


export function reset_title_block(title_block: TitleGenerator,
                                  title: string = DEFAULT_TITLE_BLOCK_TITLE,
                                  logo_width: number = DEFAULT_TITLE_BLOCK_LOGO_WIDTH) {
  title_block.removeAllParagraphs();
  let paragraph: Paragraph = generate_default_paragraph(title, logo_width);
  title_block.addParagraph(paragraph);
  return;
}

export function isDefaultTitleBlock(title_block: TitleGenerator): boolean {
  let paragraphs = title_block.paragraphs;
  if (paragraphs.length === 1) {
    let spans = paragraphs[0].spans;
    if (spans.length === 2) {
      let title_span = spans[0];
      let image_span = spans[1];
      if (title_span instanceof TextSpan && image_span instanceof ImageSpan) {
        return image_span.width === DEFAULT_TITLE_BLOCK_LOGO_WIDTH && title_span.text === DEFAULT_TITLE_BLOCK_TITLE;
      }
    }
  }
  return false;
}
