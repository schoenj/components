import { CommonModule } from '@angular/common';
import { PsSelectModule } from '@prosoft/components/select';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/select.md';

export default {
  title: 'Select',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsSelectModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>Select showcase</p>
    `,
  };
}
