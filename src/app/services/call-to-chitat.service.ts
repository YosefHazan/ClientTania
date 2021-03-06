import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CallToChitatService {
  private yyMyHost: string =  "https://tanyayomi.com/"; // "//localhost/yy/day=2020-09-29.js"
  constructor(private http: HttpClient) { 
    if(window.location.host == "localhost:4200" && !window.navigator.onLine)
    { 
      console.log("האינטרנט כבוי");
      this.yyMyHost = "http://localhost/";
    }
  }

  public getTodayLessons():Observable<any> 
  {
    const url = this.yyMyHost + 'yy/yyGetToday.php?day=' + formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log('cal to url ' + url);
    return this.http.get(url).pipe(map((obj)=>
    { 
      //return this.ajax().pipe(map((obj)=>{ 
      //console.log('mapping start ' );
      console.log('mapping end with : ' + obj);
      return obj;
    }));
  };

  public getNotTodayLessons(byAfterOrBefore):Observable<any> 
  {
    let ydate = new Date();
    ydate.setDate(ydate.getDate() + byAfterOrBefore);
    const url = this.yyMyHost + 'yy/yyGetToday.php?day=' + formatDate(ydate, 'yyyy-MM-dd', 'en');
    console.log('cal to url ' + url);
    return this.http.get(url).pipe(map((obj)=>
    { 
      //return this.ajax().pipe(map((obj)=>{ 
      //console.log('mapping start ' );
      console.log('mapping end with : ' + obj);
      return obj;
    }));
  };
}