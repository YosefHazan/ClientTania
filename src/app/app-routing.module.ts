import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowLessonComponent} from '../app/show-lesson/show-lesson.component';
import{MidrashaComponent} from '../app/midrasha/midrasha.component';
const routes: Routes = [
  /*{ path: '**', redirectTo: 'chitat'},
  */
  { path:'', redirectTo:'chitat', pathMatch: 'full' },
  { path:'chitat', component:ShowLessonComponent},
  { path:'midrasha', component:MidrashaComponent}
  //{ path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
