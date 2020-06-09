import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidrashaComponent } from './com/midrasha/midrasha.component';
import { chitatComponent } from './com/chitat/chitat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MidrashaYomitComponent } from './com/midrasha-yomit/midrasha-yomit.component';
import { AAAComponent } from './com/aaa/aaa.component';

@NgModule({
  declarations: [
    AppComponent,
    MidrashaComponent,
    chitatComponent,
    MidrashaYomitComponent,
    AAAComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }