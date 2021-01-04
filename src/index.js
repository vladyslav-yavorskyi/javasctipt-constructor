import { model } from './model';
import { tempaltes } from './templates';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach((block) => {
  const generate = tempaltes[block.type];
  console.log(generate);
  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML('beforeend', html);
  }
});
