import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsFlipContainerModule } from '@prosoft/components/flip-container';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('FlipContainer', module)
  .addDecorator(centered)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, PsFlipContainerModule],
    })
  )
  .add('PsFlipContainer', () => {
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
  });
