import { CommonModule } from '@angular/common';
import { PsFormFieldModule } from '@prosoft/components/form-field';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/form-field.md';

export default {
  title: 'FormField',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsFormFieldModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>FormField showcase</p>
    `,
  };
}
