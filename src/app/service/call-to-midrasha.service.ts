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

  getAllLessons():Observable<any>{
    this.saveAllLessons = this.http.get(this.url);
    return this.saveAllLessons;
  }
}
