import img from './img/app.jpg';

export const model = [
  {
    type: 'title',
    value: 'Web constructor on pure JavaScript!',
    options: {
      tag: 'h1',
      styles:
        'background: linear-gradient(90deg, rgba(255,233,133,1) 0%, rgba(255,148,16,1) 97%);; color: #fff; text-align: center; font-weight: 600; padding: 0.5rem;',
    },
  },
  {
    type: 'text',
    value: 'The web application on pure JS, without any frameworks',
    options: {
      styles:
        'background: linear-gradient(212deg, rgba(133,207,255,1) 0%, rgba(16,61,255,1) 97%);; color: yellow; text-align: center;',
    },
  },
  {
    type: 'title',
    value: 'About Author:',
    options: {
      tag: 'h2',
      styles: 'font-weight: 500;',
    },
  },
  {
    type: 'textColumns',
    value: [
      'name: Vladyslav Yavorksyi😃',
      'job: a profesional Front-end Developer😎',
      'contact: vlad09vlad09@gmail.com📧',
    ],
    options: {
      styles: 'text-align: center; padding: 1rem; border: 1px solid #ccc;',
    },
  },
  {
    type: 'image',
    value: img,
    options: {
      styles: ' display: flex; justify-content: center;',
    },
  },
];
