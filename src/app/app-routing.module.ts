import { RouterModule, Routes } from '@angular/router';

import { EntertainmentComponent } from './entertainment/entertainment.component';
import { NgModule } from '@angular/core';
import { ScienceComponent } from './science/science.component';

const routes: Routes = [
  {path: '', component: EntertainmentComponent},
  {path: 'science', component: ScienceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
