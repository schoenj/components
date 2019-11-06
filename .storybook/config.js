import '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, configure } from '@storybook/angular';

import '@angular/material/prebuilt-themes/deeppurple-amber.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    name: 'prosoft/components',
    sortStoriesByKind: true,
  }
});

// automatically import all files ending in *.stories.ts
configure(require.context('../src/stories', true, /\.stories\.ts$/), module);
