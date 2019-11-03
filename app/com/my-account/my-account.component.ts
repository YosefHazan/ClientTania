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
    this.yycookies.set("isWantCookies", "אישור", null, null, window.location.hostname);
    this.yycookies.set("chitatArray", "אישור", null, null, window.location.hostname);
    this.yycookies.set("midrashaArray", "אישור", null, null, window.location.hostname);
  }
  yyLoadMidrashaTable() {

  }
  yySetUpCookies(){

  }
  yyRemuveChitat(){

  }
  yyRemuveMidrasha(){
    
  }
}
