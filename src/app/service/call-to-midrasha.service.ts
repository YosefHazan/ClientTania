import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CallToMidrasha {

  private saveAllLessons:any;
  private url:string = 'http://tanyayomi.com/yy/yyGetMidrashah.php';

  constructor(private http: HttpClient) { }

  getLessonsSpecific(name:string):Observable<string> {
    
    let res;
    //return this.http.get(url).pipe(map((obj)=>{ 
    return this.saveAllLessons.pipe(map((obj:any)=>{ 
      console.log('mapping start');
      name = name.toUpperCase();
      for (let k in obj){
        console.log(k['title'] + 'k[title]');
        if (k['title'].toUpperCase().startsWith(name))
        {
           res=k['title'];
           console.log('mapping end with : ' + res);
        }
      }
      return res;
    }));
  };

  getAllLessons():Observable<any>{
    this.saveAllLessons = this.http.get(this.url);
    return this.saveAllLessons;
  }
}
