import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallToMidrashaService {

  private saveAllLessons:any;
  private url:string = 'http://tanyayomi.com/yy/yyGetMidrashah.php';

  constructor(private http: HttpClient) { }

  getAllLessons():any{
    this.saveAllLessons = this.http.get(this.url);
    return this.saveAllLessons;
  }
}
