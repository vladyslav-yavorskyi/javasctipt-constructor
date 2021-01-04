import img from './img/app.jpg';
import {
  TitleBlock,
  TextBlock,
  TextColumnsBlock,
  ImageBlock,
} from './classes/blocks';

export const model = [
  new TitleBlock('Web constructor on JavaScript!', {
    tag: 'h1',
    styles:
      'background: linear-gradient(90deg, rgba(255,233,133,1) 0%, rgba(255,148,16,1) 97%);; color: #fff; text-align: center; font-weight: 600; padding: 0.5rem;',
  }),
  new TextBlock('The web application on pure JS', {
    styles:
      'background: linear-gradient(212deg, rgba(133,207,255,1) 0%, rgba(16,61,255,1) 97%);; color: yellow; text-align: center;',
  }),
  new TitleBlock('About Author:', {
    tag: 'h2',
    styles: 'font-weight: 500;',
  }),
  new TextColumnsBlock(
    [
      'name: Vladyslav Yavorksyi😃',
      'job: a profesional Front-end Developer😎',
      'contact: vlad09vlad09@gmail.com📧',
    ],
    {
      styles: 'text-align: center; padding: 1rem; border: 1px solid #ccc;',
    }
  ),
  new ImageBlock(img, {
    styles: ' display: flex; justify-content: center;',
  }),
];
