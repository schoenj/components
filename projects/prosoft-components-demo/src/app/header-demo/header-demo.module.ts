import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { PsHeaderModule } from '@prosoft/components/header';
import { HeaderDemoComponent } from './header-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeaderDemoComponent,
      },
    ]),
    PsHeaderModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [HeaderDemoComponent],
})
export class HeaderDemoModule {}
