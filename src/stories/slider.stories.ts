import { CommonModule } from '@angular/common';
import { PsSliderModule } from '@prosoft/components/slider';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/slider.md';

export default {
  title: 'Slider',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PsSliderModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <p>Slider showcase</p>
    `,
  };
}
