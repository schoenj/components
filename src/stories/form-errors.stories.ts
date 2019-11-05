import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasePsFormService, IPsFormError, IPsFormErrorData, PsFormBaseModule } from '@prosoft/components/form-base';
import { PsFormErrorsModule } from '@prosoft/components/form-errors';
import { centered } from '@storybook/addon-centered/angular';
import { moduleMetadata } from '@storybook/angular';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/client/preview/types';
import { Observable, of } from 'rxjs';
import documentation from '../docs/form-errors.md';

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

export default {
  title: 'FormErrors',
  decorators: [
    centered,
    moduleMetadata({
      imports: [ReactiveFormsModule, CommonModule, PsFormErrorsModule, PsFormBaseModule.forRoot(DemoPsFormsService)],
    }),
  ],
  parameters: { notes: documentation },
};

export function showcase(): StoryFnAngularReturnType {
  return {
    template: `
    <div [formGroup]="form" novalidate>
      <input type="text" [formControlName]="'input1'" />
      <input type="text" [formControlName]="'input2'" />
    </div>

    Errors:
    <ps-form-errors [form]="form"></ps-form-errors>
    `,
    props: {
      form: new FormGroup(
        {
          input1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
          input2: new FormControl('', [Validators.required]),
        },
        [(form: AbstractControl) => (form.value.input1 !== form.value.input2 ? { equal: 'must be equal' } : null)]
      ),
    },
  };
}
