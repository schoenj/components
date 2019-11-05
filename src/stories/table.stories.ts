import { CommonModule } from '@angular/common';
import { PsTableModule } from '@prosoft/components/table';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/table.md';

export default {
  title: 'Table',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsTableModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>Table showcase</p>
    `,
  };
}
