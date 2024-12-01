import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { CodeDisplayComponent } from './components/code-display/code-display.component';


@NgModule({
  declarations: [
    CardComponent,
    CodeDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CardComponent,
    CodeDisplayComponent
  ]
})
export class SharedModule { }
