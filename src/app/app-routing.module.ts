import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { BuyBooksComponent }      from './com/buy-books/buy-books.component'
import { BuyLecturesComponent }   from './com/buy-lectures/buy-lectures.component';*/
import { ChitatComponent }        from './com/chitat/chitat.component';
import { MidrashaComponent }      from './com/midrasha/midrasha.component';

const routes: Routes = [
  { path: "",                pathMatch: "full" ,redirectTo: "chitat"},
  { path: "chitat",          component:ChitatComponent},
  { path: "midrasha",        component:MidrashaComponent}
  /*{ path: "buyLectures",     component:BuyLecturesComponent},
  { path: "buyBooks" ,       component:BuyBooksComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
