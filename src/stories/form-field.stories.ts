import { CommonModule } from '@angular/common';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasePsFormService, IPsFormError, IPsFormErrorData, PsFormBaseModule } from '@prosoft/components/form-base';
import { PsFormFieldModule } from '@prosoft/components/form-field';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Observable, of } from 'rxjs';
import documentation from '../docs/form-field.md';

class DemoPsFormsService extends BasePsFormService {
  public getLabel(formControl: any): Observable<string> {
    return formControl.psLabel ? of(formControl.psLabel) : null;
  }
  protected mapDataToError(errorData: IPsFormErrorData[]): Observable<IPsFormError[]> {
    return of(
      errorData.map(data => ({
        errorText: `${data.controlPath} - ${data.errorKey} - ${JSON.stringify(data.errorValue)}`,
        data: data,
      }))
    );
  }
}

class CustomErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, _: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid);
  }
}

export default {
  title: 'FormField',
  decorators: [
    centered,
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PsFormBaseModule.forRoot(DemoPsFormsService),
        PsFormFieldModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [{ provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher }],
    }),
  ],
  parameters: { notes: documentation },
};

export function appearance(): StoryFnAngularReturnType {
  return {
    template: `
      <ps-form-field style="margin: .5em;" [appearance]="'legacy'" [hint]="'hint text'">
        <mat-label>Legacy</mat-label>
        <input matInput type="text" />
      </ps-form-field>
      <ps-form-field style="margin: .5em;" [appearance]="'standard'" [hint]="'hint text'">
        <mat-label>Standard</mat-label>
        <input matInput type="text" />
      </ps-form-field>
      <ps-form-field style="margin: .5em;" [appearance]="'fill'" [hint]="'hint text'">
        <mat-label>Fill</mat-label>
        <input matInput type="text" />
      </ps-form-field>
      <ps-form-field style="margin: .5em;" [appearance]="'outline'" [hint]="'hint text'">
        <mat-label>Outline</mat-label>
        <input matInput type="text" />
      </ps-form-field>
    `,
    props: {
      value: '',
    },
  };
}

export function noFormBinding(): StoryFnAngularReturnType {
  return {
    template: `
      <ps-form-field [hint]="'hint text'">
        <mat-label>Referenz Column</mat-label>
        <input matInput type="text" />
      </ps-form-field>
    `,
  };
}

export function noMatFormFieldControl() {
  return {
    template: `
      <ps-form-field [hint]="'hint text'">
        <mat-label>Referenz Column</mat-label>
        <input type="text" />
      </ps-form-field>
    `,
    props: {
      value: '',
    },
  };
}

export function ngModel() {
  return {
    template: `
      <ps-form-field [hint]="'hint text'">
        <mat-label>Referenz Column</mat-label>
        <input matInput type="text" [(ngModel)]="value" />
      </ps-form-field>
    `,
    props: {
      value: '',
    },
  };
}

export function ngModelWithoutMatFormFieldControl() {
  return {
    template: `
      <ps-form-field [hint]="'hint text'">
        <mat-label>Referenz Column</mat-label>
        <input type="text" [(ngModel)]="value" />
      </ps-form-field>
    `,
    props: {
      value: '',
    },
  };
}

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
      <ps-form-field [hint]="'hint text'">
        <mat-label>Referenz Column</mat-label>
        <input matInput [(ngModel)]="value" type="text" />
      </ps-form-field>
    `,
    props: {
      value: '',
    },
  };
}
