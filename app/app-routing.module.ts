import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';/*
import {ShowLessonComponent} from '../app/com/show-lesson/show-lesson.component';
import{MidrashaComponent} from '../app/com/midrasha/midrasha.component';*/
const routes: Routes = [];
  /*{ path: '**', redirectTo: 'chitat'},

  { path:'tanyayomi.com/yy/ClientTania', redirectTo:'/chitat' , pathMatch: 'full' },
  { path:'yy/ClientTania', redirectTo:'/chitat' , pathMatch: 'full' },
  { path:'', redirectTo:'/chitat' , pathMatch: 'full' },
  { path:'chitat', component:ShowLessonComponent},
  { path:'midrasha', component:MidrashaComponent}
  //{ path:'login', component:LoginComponent},  
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
