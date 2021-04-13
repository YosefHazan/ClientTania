import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
/*import { BuyBooksComponent }    from './com/buy-books/buy-books.component'
import { BuyLecturesComponent }   from './com/buy-lectures/buy-lectures.component';*/
import { ChitatComponent }        from './com/chitat/chitat.component';
import { MidrashaComponent }      from './com/midrasha/midrasha.component';
import { HomeCompsComponent }     from './com/subCom/home-comps/home-comps.component';
import { ExampleMidrashaComponent } from './com/example-midrasha/example-midrasha.component';

const routes: Routes = [
  { path: "",                pathMatch: "full", redirectTo: "Home"},
  { path: "chitat",          component: ChitatComponent },
  { path: "midrasha",        component: ExampleMidrashaComponent},//TODO:MidrashaComponent
  { path: "Home",            component: HomeCompsComponent }
  /*{ path: "buyLectures",     component:BuyLecturesComponent},
  { path: "buyBooks" ,       component:BuyBooksComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
