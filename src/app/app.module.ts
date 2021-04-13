import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
//import {}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyBooksComponent } from './com/buy-books/buy-books.component';
import { AudioCompsComponent } from './com/subCom/audio-comps/audio-comps.component';
import { BuyLecturesComponent } from './com/buy-lectures/buy-lectures.component';
import { ChitatComponent } from './com/chitat/chitat.component';
import { MidrashaComponent } from './com/midrasha/midrasha.component';
import { SreachCompsComponent } from './com/subCom/sreach-comps/sreach-comps.component';
import { HomeCompsComponent } from './com/subCom/home-comps/home-comps.component';
import { ExampleMidrashaComponent } from './com/example-midrasha/example-midrasha.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyBooksComponent,
    AudioCompsComponent,
    BuyLecturesComponent,
    ChitatComponent,
    MidrashaComponent,
    SreachCompsComponent,
    HomeCompsComponent,
    ExampleMidrashaComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
