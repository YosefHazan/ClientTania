import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { BuyBooksComponent }      from './com/buy-books/buy-books.component'
import { BuyLecturesComponent }   from './com/buy-lectures/buy-lectures.component';
import { chitatComponent }        from './com/chitat/chitat.component';
import { MidrashaComponent }      from './com/midrasha/midrasha.component';
import { MidrashaYomitComponent } from './com/midrasha-yomit/midrasha-yomit.component';

const appRoutes: Routes = [
  { path: "",                pathMatch: "full" ,redirectTo: "/chitat"},
  { path: "chitat",          component:chitatComponent},
  { path: "midrasha",        component:MidrashaComponent},
  { path: "midrasha-yomit",  component:MidrashaYomitComponent},
  { path: "buyLectures",     component:BuyLecturesComponent},
  { path: "buyBooks" ,       component:BuyBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
