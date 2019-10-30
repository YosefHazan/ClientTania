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
    

    //return this.http.get(url).pipe(map((obj)=>{ 
    return this.saveAllLessons.pipe(map((obj)=>{ 
      console.log('mapping start');
      name = name.toUpperCase();
      /*for (let k in obj){
        if (k.toLowerCase().startsWith(name) || obj[k].toLowerCase().startsWith(name) ){
          res[k]=obj[k]
          
        }
      }*/
  
      console.log('mapping end with : ' + obj[name]);

      return obj[name];
    }));
  };

  getAllLessons():Observable<any>{
    this.saveAllLessons = this.http.get(this.url);
    return this.saveAllLessons;
  }
}
