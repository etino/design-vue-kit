import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome.vue';

export default {
  title: 'Introduzione/Introduzione',
};

export const benvenuto = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
});

benvenuto.story = {
  name: 'Benvenuto',
};
