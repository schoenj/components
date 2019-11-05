import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsFlipContainerModule } from '@prosoft/components/flip-container';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/flip-container.md';

export default {
  title: 'FlipContainer',
  decorators: [
    centered,
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, PsFlipContainerModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function example(): StoryFnAngularReturnType {
  return {
    template: `
      <ps-flip-container #flip style="display:block; width: 100px; height: 100px;">
        <div *psFlipContainerFront style="height: 100px; background-color: red;">
          Front
          <button (click)="counter = counter + 1" style="cursor: pointer">increase count</button>
        </div>
        <div *psFlipContainerBack style="height: 100px; background-color: green;">Back</div>
      </ps-flip-container>
      <button (click)="flip.toggleFlip()">toggle</button>
      Counter: {{ counter }}
    `,
    props: {
      counter: 0,
    },
  };
}
