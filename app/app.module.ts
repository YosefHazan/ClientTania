import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidrashaComponent } from './com/midrasha/midrasha.component';
import { ShowLessonComponent } from './com/show-lesson/show-lesson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyAccountComponent } from './com/my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    MidrashaComponent,
    ShowLessonComponent,
    MyAccountComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
