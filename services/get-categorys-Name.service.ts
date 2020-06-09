import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetAllCategoryLessonService {

  private saveCategorysName:any;
  private url:string = 'https://tanyayomi.com/yy/yyAllTable.php';

  constructor(private http: HttpClient) { }

  getCategorysName():any{
    this.saveCategorysName = this.http.get(this.url).pipe(map((obj)=>obj));
    return this.saveCategorysName;
  }
}