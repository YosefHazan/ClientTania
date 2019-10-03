import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallToServerService {

  constructor(private http: HttpClient) { }

  public getTodayLessons():Observable<any> {
    const url = '//tanyayomi.com/yy/yyGetToday.php?day=2019-10-03';

    return this.http.get(url).pipe(map((obj)=>{ 
    //return this.ajax().pipe(map((obj)=>{ 
      console.log('mapping start : ' + obj[3]['sug']);
      
      console.log('mapping end with : ' + obj);

      return obj;
    }));
  };

  private ajax(){
   return  of(this.bigthing).pipe(
     tap(data=>console.log('server was called')),
     delay(354)
   )
  }

  private bigthing =
  [
  {
      "title": "פרשת האזינו - יום שני",
      "mydesc":"שאל אביך - באיזה אבא מדובר?",
      "audio":"http://goo.gl/sUQdiZ",
      "date":"2019-01-01"
  },
  {
      title: "תניא שנה מעוברת אגרת הקודש סימן י - א אלול   ",
      mydesc:"אור עליון זה מאיר ומתפשט תוך העולמות ומתקן כל מעוות",
      audio:"http://goo.gl/NqwAWi",
      "date":"2019-01-01"
  }];
  /*
  [{"id":"1","name":"name","Email":"Email@email.com","Choice":"Mehir"},{"id":"2","name":"name1","Email":"Email@email.com1","Choice":"Mehir1"}];
  getAllCountry():Observable<any>{
    return this.ajax();
  }*/

}