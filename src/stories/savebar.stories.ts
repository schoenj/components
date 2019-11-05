import { CommonModule } from '@angular/common';
import { PsSavebarModule } from '@prosoft/components/savebar';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/savebar.md';

export default {
  title: 'Savebar',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsSavebarModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>Savebar showcase</p>
    `,
  };
}
