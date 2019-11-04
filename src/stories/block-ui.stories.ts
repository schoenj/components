import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsBlockUiModule } from '@prosoft/components/block-ui';
import { moduleMetadata, storiesOf } from '@storybook/angular';

storiesOf('BlockUi', module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, MatCardModule, PsBlockUiModule],
    })
  )
  .add('Normal sized area', () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card style="height: 30vh">
            this will be blocked
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: true,
        spinnerText: 'some custom text that will be displayed while the view is blocked',
      },
    };
  })
  .add('Small sized area', () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card>
            this will be blocked
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: true,
        spinnerText: 'some custom text that will be displayed while the view is blocked',
      },
    };
  })
  .add('Large sized area', () => {
    return {
      template: `
        <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
          <mat-card style="height: 300vh">
            this will also be blocked to show position sticky
          </mat-card>
        </ps-block-ui>
      `,
      props: {
        blocked: true,
        spinnerText: 'some custom text that will be displayed while the view is blocked',
      },
    };
  });
