import { row, col } from './utils';

function title(block) {
  const { tag, styles } = block.options;

  return row(col(`<${tag} style="${styles}">${block.value}</${tag}>`, styles));
}

function text(block) {
  const { styles } = block.options;
  return row(col(`<p style="${styles}">${block.value}</p>`));
}

function textColumns(block) {
  const { styles } = block.options;
  let html = block.value.map((item) => col(item, styles));

  return row(html.join(' '));
}

function image(block) {
  const { styles } = block.options;
  return row(col(`<img src="${block.value}" />`, styles));
}

export const tempaltes = { title, text, textColumns, image };
