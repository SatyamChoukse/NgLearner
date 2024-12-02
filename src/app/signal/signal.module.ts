import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalRoutingModule } from './signal-routing.module';
import { SignalDetailComponent } from './signal-detail/signal-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignalDetailComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule,
    SharedModule
  ]
})
export class SignalModule { }
