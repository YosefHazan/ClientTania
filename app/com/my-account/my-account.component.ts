import { Component, OnInit } from '@angular/core';
import { ManageCookiesService } from '../../service/manage-cookies.service';
import { minLessons } from '../../classes/minLessons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public btnText: string = "אישור";
  public AllChitatLessons: minLessons[] = [];
  public AllMidrashaLessons: minLessons[] = [];
  constructor(private CookieService: ManageCookiesService) { }

  ngOnInit() {
    
    if (this.CookieService.yyIsUserWantCookies()) {
      this.btnText = "ביטול שמירה";
      this.AllChitatLessons = this.CookieService.yyLoadCookies();
      console.log("ngOnInit + MyAccountComponent + cokies is full" );
    }
    else{
      this.btnText = "אישור";
      this.CookieService.yySetUpCookies();
      console.log("ngOnInit + MyAccountComponent + cokies is empty" );
    }
  }
  yyIsWantCookies() {
    if (this.btnText == "אישור") {
      this.btnText = "ביטול שמירה";
      this.CookieService.yySetUpCookies();
    }
    else if (this.btnText == "ביטול שמירה") {
      this.btnText = "אישור";
      this.CookieService.yyDestroyCookies();
      this.AllChitatLessons = [];
      this.AllMidrashaLessons = [];
    }
  }

  yySpecificLesson(thisLess: any, yyChitatOrMidrasha: string) {

    if (yyChitatOrMidrasha == "Chitat") {
      this.CookieService.yyRemuveSpecificChitat(thisLess);
      this.AllChitatLessons = this.AllChitatLessons.filter(obj => obj !== thisLess);
    }
    else {
      this.CookieService.yyRemuveSpecificMidrasha(thisLess);
      this.AllMidrashaLessons = this.AllChitatLessons.filter(obj => obj !== thisLess);
    }
  }
}