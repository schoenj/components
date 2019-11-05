import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsBlockUiModule } from '@prosoft/components/block-ui';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import documentation from './block-ui.documentation.md';

const story = storiesOf('BlockUi', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, MatCardModule, PsBlockUiModule],
    })
  );

story.add(
  'Normal sized area',
  () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card style="height: 30vh">
            this will be blocked
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: boolean('blocked', true),
        spinnerText: text('spinnerText', 'some custom text that will be displayed while the view is blocked'),
      },
    };
  },
  { notes: documentation }
);

story.add(
  'Small sized area',
  () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card>
            this will be blocked
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: boolean('blocked', true),
        spinnerText: text('spinnerText', 'some custom text that will be displayed while the view is blocked'),
      },
    };
  },
  { notes: documentation }
);

story.add(
  'Large sized area',
  () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card style="height: 300vh">
            this will also be blocked to show position sticky
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: boolean('blocked', true),
        spinnerText: text('spinnerText', 'some custom text that will be displayed while the view is blocked'),
      },
    };
  },
  { notes: documentation }
);
