import img from './img/app.jpg';

export const model = [
  {
    type: 'title',
    value: 'Web constructor on pure JavaScript!',
    options: {
      tag: 'h1',
      styles:
        'background: darkred; color: #fff; text-align: center; font-weight: 600;',
    },
  },
  {
    type: 'text',
    value: 'The web application on pure JS, without any frameworks',
    options: {
      styles: 'background: darkblue; color: yellow; text-align: center;',
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
