import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import {Observable} from 'rxjs';
//import { map, catchError, timeout } from 'rxjs/operators';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowLessonComponent } from './show-lesson/show-lesson.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { MidrashaComponent } from './midrasha/midrasha.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowLessonComponent,
    ControlpanelComponent,
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
