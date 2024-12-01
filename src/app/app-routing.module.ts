import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  {
    path: '', component:BaseComponent
  },
  {
    path: 'signal', loadChildren: () => import('./signal/signal.module').then(m => m.SignalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
