import { configure } from '@storybook/vue';
import { addParameters, addDecorator } from '@storybook/vue';
import {default as theme} from './theme.js';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'
import '../assets/css/fonts.css';

addParameters({
  options: {
      /**
       * display panel that shows a list of stories
       * @type {Boolean}
       */
      showNav: true,
      /**
       * display panel that shows addon configurations
       * @type {Boolean}
       */
      showPanel: true,
      /**
       * where to show the addon panel
       * @type {('bottom'|'right')}
       */
      panelPosition: 'bottom',
      /**
       * regex for finding the hierarchy root separator
       * @example:
       *   null - turn off multiple hierarchy roots
       *   /\|/ - split by `|`
       * @type {Regex}
       */
      hierarchyRootSeparator: /\//,
      /**
       * theme storybook, see link below
       */
      theme: theme,
  },
});

const CenterDecorator = () => ({
  data() {
    return {
      styles: {
        position: 'relative',
        boxSizing: 'border-box',
        margin: '0',
        padding: '48px 32px',
        textAlign: 'initial'
      }
    }
  },
  template:`<div :style=styles><story /></div>`
})

addDecorator(CenterDecorator);

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }


// // automatically import all files ending in *.stories.js
// configure(loadStories, module);


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

