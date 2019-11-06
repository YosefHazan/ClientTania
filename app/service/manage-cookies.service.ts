import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { minLessons } from '../classes/minLessons';

@Injectable({
  providedIn: 'root'
})
export class ManageCookiesService {

  //variable
  public AllChitatLessons: minLessons[] = [];
  public AllMidrashaLessons: minLessons[] = [];
  private yyHostName: string = window.location.hostname;
  private CookieChitatName: string = "ChitatArray";
  private CookieMidrashaName: string = "MidrashaArray";

  //constructor
  constructor(private yycookies: CookieService) { }

  //----function----

  //retrun true if is have cookie with name.
  yyIsUserWantCookies(): boolean {
    let yyIUWC = false;
    if (this.yycookies.check("isWantCookies")) {
      yyIUWC = true;
    }

    return yyIUWC;
  }

  //base function
  private yyMyCookiesSet(cookieName: string, cookieValue: any) {
    this.yycookies.set(cookieName, JSON.stringify(cookieValue), null, null, this.yyHostName);
  }
  private yyMyCookiesGet(cookieName: string) {
    let help;
    help = this.yycookies.get(cookieName);
    //console.log( JSON.parse(this.yycookies.get(cookieName)));
    console.log(help);
    return help;
  }
  //=====================================================
  //load
  yyLoadCookies(typeLessons: string): minLessons[] {
    let help;
    console.log("yyLoadCookies");
    if (typeLessons == "Chitat") {
      return this.yyLoadChitatTable();
    }
    else { 
      return this.yyLoadMidrashaTable();
    }
  }
  //=====================================================
  yyLoadChitatTable(): minLessons[] {
    console.log("yyLoadChitatTable");
    let help = this.yyMyCookiesGet(this.CookieChitatName);
    if (help === "") {
      this.AllChitatLessons = [];
    }
    else {
      this.AllChitatLessons.map((elm) => elm = JSON.parse(help));
      console.log(JSON.parse(help) + "==JSON.parse(help)");
    }
    console.log(help + "nojson==JSON.parse(help)");
    console.log(this.AllChitatLessons + "this.AllChitatLessons");
    return this.AllChitatLessons;
  }
  //=====================================================
  yyLoadMidrashaTable() {
    let help = this.yyMyCookiesGet(this.CookieMidrashaName);

    if (help === "") {
      this.AllMidrashaLessons = [];
    }
    else {
      this.AllMidrashaLessons.map((elm) => elm = JSON.parse(help));
    }
    return this.AllMidrashaLessons;
  }

  //set
  yySetUpCookies() {
    this.yycookies.set("isWantCookies", "אישור", null, null, this.yyHostName);
    //chitat
    this.yycookies.set(this.CookieChitatName, "", null, null, this.yyHostName);
    //midrasha
    this.yycookies.set(this.CookieMidrashaName, "", null, null, this.yyHostName);
  }
  yySetSpecificChitat(specifieLesson: minLessons) {
    console.log("step 1 -" + specifieLesson + " : specifieLesson");
    console.log("step 2 -" + this.AllChitatLessons + " : AllChitatLessons");
    this.yyLoadChitatTable();
    console.log("step 3 -" + this.AllChitatLessons + " : AllChitatLessons");
    if (this.AllChitatLessons === null) {
      this.AllChitatLessons[0] = specifieLesson;
    }
    else {
      this.AllChitatLessons.push(specifieLesson);
    }
    console.log("step 4 -" + this.AllChitatLessons + " : AllChitatLessons");
    this.yyMyCookiesSet(this.CookieChitatName, this.AllChitatLessons);
  }

  yySetSpecificMidrasha(specifieLesson: minLessons) {
    this.yyLoadMidrashaTable();
    if (this.AllMidrashaLessons === null) {
      this.AllMidrashaLessons[0] = specifieLesson;
    }
    else {
      this.AllMidrashaLessons.push(specifieLesson);
    }
    this.yyMyCookiesSet(this.CookieMidrashaName, this.AllMidrashaLessons);
  }

  //remuve
  yyRemuveSpecificChitat(specifieLesson: minLessons) {
    //get all from cookie
    this.yyLoadChitatTable();
    //calculate them
    this.AllChitatLessons = this.AllChitatLessons.filter(obj => obj !== specifieLesson);
    //set
    this.yyMyCookiesSet(this.CookieChitatName, this.AllChitatLessons);
  }
  yyRemuveSpecificMidrasha(specifieLesson: minLessons) {
    //get all from cookie
    this.yyLoadMidrashaTable()
    //calaculate them
    this.AllMidrashaLessons = this.AllMidrashaLessons.filter(obj => obj !== specifieLesson);
    //set
    this.yyMyCookiesSet(this.CookieMidrashaName, this.AllMidrashaLessons);
  }

  yyDestroyCookies() {
    this.yycookies.deleteAll(null, this.yyHostName);
    this.AllChitatLessons = [];
    this.AllMidrashaLessons = [];
  }
}