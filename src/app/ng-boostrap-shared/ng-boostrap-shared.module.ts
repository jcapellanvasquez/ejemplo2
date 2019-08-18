import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  exports: [
    NgbAlertModule
  ]
})
export class NgBoostrapSharedModule { }
