import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { IPsFormError, PsFormService } from '@prosoft/components/form-base';
import { Observable } from 'rxjs';

import type { FormGroup } from '@angular/forms';

@Component({
  selector: 'ps-form-errors',
  template: `
    <mat-chip-list class="ps-form-errors__container" *ngIf="errors$ | async as errors">
      <mat-chip class="ps-form-errors__item" *ngFor="let error of errors">{{ error.errorText }}</mat-chip>
    </mat-chip-list>
  `,
  styles: [
    `
      .ps-form-errors__container {
        font-size: 12px;
      }
      .mat-chip.ps-form-errors__item {
        background-color: var(--ps-error);
        color: var(--ps-error-contrast);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PsFormErrorsComponent implements OnChanges {
  @Input() public form!: FormGroup;
  @Input() public includeControls: boolean = null;

  public errors$!: Observable<IPsFormError[]>;

  constructor(private formErrorsService: PsFormService) {}

  public ngOnChanges() {
    this.errors$ = this.formErrorsService.getFormErrors(this.form, this.includeControls);
  }
}
