import { CommonModule } from '@angular/common';
import { PsFormModule } from '@prosoft/components/form';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/form.md';

export default {
  title: 'Form',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsFormModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>Form showcase</p>
    `,
  };
}
