import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from './blocks';
import { isValid } from '../utils';

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;

    this.init();
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [
      block('Title'),
      block('Text'),
      block('ColumnText'),
      block('Image'),
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();

    const type = event.target.name;
    const tag = event.target.tag.value;
    let value = event.target.value.value;
    const styles = event.target.styles.value;

    if (!value && !tag) {
      return (event.target.style.border = '1px solid red');
    }

    event.target.style.border = '1px solid green';

    let Constructor;

    switch (type) {
      case 'Title':
        Constructor = TitleBlock;
        break;
      case 'Text':
        Constructor = TextBlock;
        break;
      case 'Image':
        Constructor = ImageBlock;
        break;
      case 'ColumnText':
        Constructor = TextColumnsBlock;
        value = value.split(' ');
        break;
      default:
        console.log(`Sorry, we are out of ${type}.`);
    }

    const newBlock = new Constructor(value, { tag, styles });
    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
    event.target.tag.value = '';
  }
}

function block(type) {
  return `
  <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
      <input
        name="tag"
        placeholder="tag"
        class="form-control form-control-sm"
      />
    </div>
    <div class="form-group">
      <input
        name="value"
        placeholder="value"
        class="form-control form-control-sm"
      />
    </div>
    <div class="form-group">
      <input
        name="styles"
        placeholder="styles"
        class="form-control form-control-sm"
      />
    </div>
    <button  type="submit" class="btn btn-primary btn-sm">Create</button>
  </form>
  `;
}
