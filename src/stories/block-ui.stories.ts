import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsBlockUiModule } from '@prosoft/components/block-ui';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import documentation from '../docs/block-ui.md';

export default {
  title: 'BlockUi',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, MatCardModule, PsBlockUiModule],
    }),
  ],
  parameters: { notes: documentation },
};

export function normalSizeArea(): StoryFnAngularReturnType {
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
}

export function smallSizeArea(): StoryFnAngularReturnType {
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
}

export function largeSizeArea(): StoryFnAngularReturnType {
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
}
