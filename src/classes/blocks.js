import { row, col } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Method toHTML must be realizited');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h2', styles } = this.options;

    return row(col(`<${tag} style="${styles}">${this.value}</${tag}>`, styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<img src="${this.value}" />`, styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(col(`<p style="${styles}">${this.value}</p>`));
  }
}

export class TextColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    let html = this.value.map((item) => col(item, styles));

    return row(html.join(' '));
  }
}
