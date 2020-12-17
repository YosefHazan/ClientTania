import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallToMidrashaService {

  private saveAllLessons:any;
  constructor(private http: HttpClient) { }

  getAllLessons(tableName:string):any{
    const url = 'https://tanyayomi.com/yy/yyGetByTable.php?tableName=' + tableName;
    console.log("mapping  : " + url);
    return this.http.get(url).pipe(map((obj)=>obj));
    /*console.log("yosef : " + JSON.stringify(yosef));
    return yosef;
    //return this.saveAllLessons;
    */
  }
}