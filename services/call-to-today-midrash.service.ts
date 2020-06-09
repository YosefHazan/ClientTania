import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CallToTodayMidrashService {

  constructor(private http: HttpClient) { }
  
   public getTodayLessons():Observable<any> {
    
    const url = 'https://tanyayomi.com/yy/yyGetMidrashahToday.php?day=' + formatDate(new Date(), 'yyyy-MM-dd', 'en');
    console.log('mapping : ' + url);
    return this.http.get(url).pipe(map((obj)=>{
      
      console.log('mapping end with : ' + obj);
  
      return obj;
    }));
  };
}
