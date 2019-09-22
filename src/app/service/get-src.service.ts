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
    const url = '';
    
    //return this.http.get(url).pipe(map((obj)=>{ 
    return this.ajax().pipe(map((obj)=>{ 
      console.log('mapping start');
      /*for (let k in obj){
        if (k.toLowerCase().startsWith(name) || obj[k].toLowerCase().startsWith(name) ){
          res[k]=obj[k]
        }
      }*/
  
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

  private bigthing=
  {
    tania: "http://goo.gl/1UESua",
    hayomyom: "http://goo.gl/UQDf9J",
    chumash:"http://goo.gl/EYRCf6",
    thilim:"http://goo.gl/mvmNHz",
    rambam1: "http://bit.ly/2klVYGo",
    rambam3:"" 
  }
  /*
  getAllCountry():Observable<any>{
    return this.ajax();
  }*/
}
