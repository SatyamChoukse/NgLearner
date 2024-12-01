import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDetailComponent } from './signal-detail/signal-detail.component';

const routes: Routes = [
  {
    path: '', component: SignalDetailComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalRoutingModule { }
