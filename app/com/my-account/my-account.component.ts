import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { minLessons } from '../../classes/minLessons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  private cookieValue: string;
  private AllChitatLessons: minLessons;
  private AllMidrashaLessons: minLessons;
  public btnText: string = "אישור";
  constructor(private yycookies: CookieService) { }

  ngOnInit() {
    if (this.yycookies.check("isWantCookies")) {
      this.btnText = "ביטול שמירה";
      this.yyLoadCookies();
    }
  }
  yyIsWantCookies() {
    if (this.btnText == "אישור") {
      this.btnText = "ביטול שמירה";
      this.yySetUpCookies();
    }
    else if (this.btnText == "ביטול שמירה"){
      this.btnText = "אישור";
      this.yyDestroyCookies();
    }
  }
  yyDestroyCookies() {
    this.yycookies.deleteAll(null, window.location.hostname);
  }
  yyLoadCookies() {
    this.yyLoadChitatTable();
    this.yyLoadMidrashaTable();
  }
  yyLoadChitatTable() {
    this.AllChitatLessons = this.yycookies.get("chitatArray");
  }
  yyLoadMidrashaTable() {
    this.AllMidrashaLessons = this.yycookies.get("midrashaArray");
  }
  yySetUpCookies(){
    this.yycookies.set("isWantCookies", "אישור", null, null, window.location.hostname);
    this.yycookies.set("chitatArray", this.AllChitatLessons, null, null, window.location.hostname);
    this.yycookies.set("midrashaArray", this.AllMidrashaLessons, null, null, window.location.hostname);
  }
  yyRemuveChitat(specifieLesson: any){
    //get all from cookie
    this.yyLoadChitatTable();
    //calculate them
    //set
    this.yycookies.set("chitatArray", this.AllChitatLessons, null, null, window.location.hostname);
  }
  yyRemuveMidrasha(specifieLesson: any){
    //get all from cookie
    this.yyLoadMidrashaTable()
    //calaculate them
    //set
    this.yycookies.set("midrashaArray", this.AllMidrashaLessons, null, null, window.location.hostname);
  }
}
/*
TODO: service that can be called from all com and add or remuve specifie Lesson
 from the json object and store or retrieve at the cookie
 
set
var json_str = JSON.stringify(arr);
createCookie('mycookie', json_str);

get
var json_str = getCookie('mycookie');
var arr = JSON.parse(json_str);
*/
