import Timeline from './timeline';

const history = new Timeline({
  header: {
    fields: [ { value: 'Column 1'}, { value: 'Column 2' } ],
  },
  // styles: {
  //   primary: { color: '#f8f8f2', bgColor: '#282a36' },
  //   secondary: { color: '#bd93f9', bgColor: '#282a36' },
  //   success: { color: '#50fa7b', bgColor: '#282a36' },
  //   danger: { color: '#ff5555', bgColor: '#282a36' },
  //   warning: { color: '#f1fa8c', bgColor: '#282a36' },
  //   info: { color: '#8be9fd', bgColor: '#282a36' },
  //   fade: { color: '#6272a4', bgColor: '#282a36' },
  //   highlight: { color: '#f8f8f2', bgColor: "#44475a" },
  // },
});

history.render();
