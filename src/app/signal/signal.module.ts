import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalRoutingModule } from './signal-routing.module';
import { SignalDetailComponent } from './signal-detail/signal-detail.component';


@NgModule({
  declarations: [
    SignalDetailComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule
  ]
})
export class SignalModule { }
