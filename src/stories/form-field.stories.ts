import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
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
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
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

export function controlComparison(): StoryFnAngularReturnType {
  return {
    template: `
    <div
    [formGroup]="form"
    style="display: grid; grid-template-columns: repeat(4, min-content); grid-auto-rows: min-content; grid-gap: 5px;"
  >
    <div>Referenz Column</div>
    <div>Control Column</div>
    <div>Referenz Column</div>
    <div>Control Column</div>
    <div>
      <div *ngFor="let i of ctrlCountNumbers">
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
    </div>
    <div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-label *ngIf="customLabel">Custom Label</mat-label>
          <mat-select formControlName="Select">
            <mat-option [value]="null"><i>keine Auswahl</i></mat-option>
            <mat-option value="item_ok">Ok</mat-option>
            <mat-option value="item_error">Error</mat-option>
          </mat-select>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-label *ngIf="customLabel">Custom Label</mat-label>
          <mat-icon matPrefix class="app-form-example__icon">home</mat-icon>
          <input matInput formControlName="Prefix_Text" type="text" />
          <mat-icon matSuffix class="app-form-example__icon">phone</mat-icon>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-label *ngIf="customLabel">Custom Label</mat-label>
          <mat-slider formControlName="Slider"></mat-slider>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
    </div>
    <div>
      <div *ngFor="let i of ctrlCountNumbers">
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
    </div>
    <div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-checkbox formControlName="Checkbox"></mat-checkbox>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-checkbox formControlName="Checkbox">{{ asyncLabel$ | async }}</mat-checkbox>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
      <div>
        <ps-form-field hint="hint text">
          <mat-label *ngIf="customLabel">Custom Label</mat-label>
          <mat-radio-group formControlName="Radio" style="display: flex;place-content: end space-between;">
            <mat-radio-button [value]="true" style="padding-right: 8px;">Ja</mat-radio-button>
            <mat-radio-button [value]="false" style="padding-right: 8px;">Nein</mat-radio-button>
            <button
              mat-icon-button
              [disabled]="form.get('Radio').disabled || form.get('Radio').value === null"
              (click)="form.get('Radio').patchValue(null)"
              style="height:24px;width:24px;line-height:24px;"
            >
              <mat-icon>clear</mat-icon>
            </button>
          </mat-radio-group>
        </ps-form-field>
      </div>
      <div>
        <ps-form-field [hint]="'hint text'">
          <mat-label>Referenz Column</mat-label>
          <input matInput [(ngModel)]="value" [ngModelOptions]="{ standalone: true }" type="text" />
        </ps-form-field>
      </div>
    </div>
    `,
    props: {
      form: new FormGroup({
        Text: new FormControl(''),
        Select: new FormControl(''),
        Checkbox: new FormControl(''),
        Radio: new FormControl(''),
        Prefix_Text: new FormControl(''),
        Slider: new FormControl(''),
      }),
      ctrlCountNumbers: Array(7).fill(1),
      asyncLabel$: of('Custom Label'),
      value: '',
      customLabel: true,
    },
  };
}
