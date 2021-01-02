import { row, col } from './utils';

function title(block) {
  const { tag, styles } = block.options;

  return row(col(`<${tag} style="${styles}">${block.value}</${tag}>`, styles));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`), block.options.styles);
}

function textColumns(block) {
  let html = block.value.map((item) => col(item));

  return row(html.join(' '));
}

function image(block) {
  const { styles } = block.options;
  return row(col(`<img src="${block.value}" />`, styles));
}

export const tempaltes = { title, text, textColumns, image };
