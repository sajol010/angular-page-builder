import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export function initGrapesJS(element) {
  const editor = grapesjs.init({
    container: element,
    fromElement: true,
    height: '100%',
    width: 'auto',
    storageManager: false,
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {}
    }
  });

  return editor;
}
