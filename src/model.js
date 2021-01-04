import img from './img/app.jpg';
import { Block } from './classes/blocks';

export const model = [
  new Block('title', 'Web constructor on pure JavaScript!', {
    tag: 'h1',
    styles:
      'background: linear-gradient(90deg, rgba(255,233,133,1) 0%, rgba(255,148,16,1) 97%);; color: #fff; text-align: center; font-weight: 600; padding: 0.5rem;',
  }),
  new Block('text', 'The web application on pure JS, without any frameworks', {
    styles:
      'background: linear-gradient(212deg, rgba(133,207,255,1) 0%, rgba(16,61,255,1) 97%);; color: yellow; text-align: center;',
  }),
  new Block('title', 'About Author:', {
    tag: 'h2',
    styles: 'font-weight: 500;',
  }),
  new Block(
    'textColumns',
    [
      'name: Vladyslav Yavorksyi😃',
      'job: a profesional Front-end Developer😎',
      'contact: vlad09vlad09@gmail.com📧',
    ],
    {
      styles: 'text-align: center; padding: 1rem; border: 1px solid #ccc;',
    }
  ),
  new Block('image', img, {
    styles: ' display: flex; justify-content: center;',
  }),
];
