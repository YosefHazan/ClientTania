import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyBooksComponent } from './com/buy-books/buy-books.component';
import { AudioCompsComponent } from './com/subCom/audio-comps/audio-comps.component';
import { BuyLecturesComponent } from './com/buy-lectures/buy-lectures.component';
import { ChitatComponent } from './com/chitat/chitat.component';
import { MidrashaComponent } from './com/midrasha/midrasha.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyBooksComponent,
    AudioCompsComponent,
    BuyLecturesComponent,
    ChitatComponent,
    MidrashaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
