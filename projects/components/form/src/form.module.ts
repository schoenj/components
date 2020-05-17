import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PsBlockUiModule } from '@prosoft/components/block-ui';
import { PsErrorMessagePipeModule } from '@prosoft/components/core';
import { PsFormErrorsModule } from '@prosoft/components/form-errors';

import { PsFormSavebarContentDirective, PsFormSavebarContentDirective2 } from './form-savebar-content.directive';
import { PsFormComponent, PsFormSavebarContentWrapperComponent } from './form.component';

@NgModule({
  declarations: [PsFormComponent, PsFormSavebarContentDirective, PsFormSavebarContentDirective2, PsFormSavebarContentWrapperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,

    PsBlockUiModule,
    PsFormErrorsModule,
    PsErrorMessagePipeModule,
  ],
  exports: [PsFormComponent, PsFormSavebarContentDirective, PsFormSavebarContentDirective2, PsFormSavebarContentWrapperComponent],
  entryComponents: [PsFormSavebarContentWrapperComponent],
})
export class PsFormModule {}
