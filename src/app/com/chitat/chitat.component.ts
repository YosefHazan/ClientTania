import { Component, OnInit, ViewEncapsulation, Input, Output} from '@angular/core';
import { fullHebrewDate } from 'src/app/classes/fullHebrewDate';
import { CallToChitatService } from '../../services/call-to-chitat.service';
import {HebrewDateService} from '../../services/hebrew-date.service';

@Component({
  selector: 'app-chitat',
  templateUrl: './chitat.component.html',
  styleUrls: ['./chitat.component.css']
})
export class ChitatComponent implements OnInit {
  public yyIsTuchHere:boolean[] = [];
  public callObservable: any;
  public AllLessons: any;
  public yyOneLesson:any;
  public yyaudio:HTMLAudioElement;
  public getSrcAudio:string;
  public SaveUserChoiseDate:number = 0;
  public currentHebrewDate:fullHebrewDate;
  public yDate:any = new Date();
  
  constructor(private ReqSer: CallToChitatService, private Hdate:HebrewDateService) { 
    this.yyOneLesson = {"sug":""};
    
    console.log("ngOnInit comp - chitat");
    this.currentHebrewDate = this.Hdate.module(this.yDate.getFullYear(), this.yDate.getMonth() + 1, this.yDate.getDate());
    console.log("currentHebrewDate : " + this.currentHebrewDate.day_in_month_hebrew_letter + " " +this.currentHebrewDate.month_name_hebrew_letter + " " + this.currentHebrewDate.year_hebrew_letter);
    this.callObservable = this.ReqSer.getTodayLessons().subscribe(data => {
      this.AllLessons = data;
      this.yyOneLesson = data[0];
      this.getSrcAudio = this.yyOneLesson['fullUrl'];
      this.AllLessons.forEach(elm => {
        switch (elm['sug']) {
          case 't':
            elm['sug'] = "תניא";
            break;
          case 'y':
              elm['sug'] = "יום יום";
              break;
          case 'c':
                elm['sug'] = "חומש";
            break;
          case 'p':
            elm['sug'] = "תהילים";
            break;
          case 'r':
          case 'r1':
            elm['sug'] = 'רמב"ם פרק אחד';
            break;
          case 'r3':
            elm['sug'] = 'רמב"ם שלשה פרקים';
            break;
          default:
            elm['sug'] =" ";
            break;
        }
    });
  });
  }

  ngOnInit() { 
    console.log("ngOnInit");
  }
  ngOnDestroy() {
    this.callObservable.unsubscribe();
  }
  toggleDisplay(yyindex:any, yyid){
    //remuve old rowClicked
    if(document.querySelector(".activRow"))
    { 
      document.querySelector(".activRow").classList.remove("activRow");
    }
    document.querySelector("#" + yyid).parentElement.classList.add("activRow");

    //muve leesons
    this.yyOneLesson = yyindex;
    console.log("this.yyOneLesson['fullUrl'] : " + this.yyOneLesson['fullUrl']);
    this.getSrcAudio = this.yyOneLesson['fullUrl'];
  }
  PlayLesson(){
    this.yyaudio.src = this.yyOneLesson['fullUrl'];
    //this.yyaudio.load();
    this.yyaudio.play();
  }
  PouseLesson(){
    this.yyaudio.pause();
  }
  nextDate(){
    this.SaveUserChoiseDate++;
    this.currentHebrewDate = this.Hdate.module(this.yDate.getFullYear(), this.yDate.getMonth() + 1, (this.yDate.getDate() + this.SaveUserChoiseDate));
    console.log("currentHebrewDate : " + this.currentHebrewDate.day_in_month_hebrew_letter + " " +this.currentHebrewDate.month_name_hebrew_letter + " " + this.currentHebrewDate.year_hebrew_letter);
    this.callObservable = this.ReqSer.getNotTodayLessons(this.SaveUserChoiseDate).subscribe(data => {
      this.AllLessons = data;
      this.yyOneLesson = data[0];
      this.getSrcAudio = this.yyOneLesson['fullUrl'];

      this.AllLessons.forEach(elm => {
        switch (elm['sug']) {
          case 't':
            elm['sug'] = "תניא";
            break;
          case 'y':
              elm['sug'] = "יום יום";
              break;
          case 'c':
                elm['sug'] = "חומש";
            break;
          case 'p':
            elm['sug'] = "תהילים";
            break;
          case 'r':
          case 'r1':
            elm['sug'] = 'רמב"ם פרק אחד';
            break;
          case 'r3':
            elm['sug'] = 'רמב"ם שלשה פרקים';
            break;
          default:
            elm['sug'] =" ";
            break;
        }
      });
    });
  }
  PreviusDate(){
    this.SaveUserChoiseDate--;
    this.currentHebrewDate = this.Hdate.module(this.yDate.getFullYear(), this.yDate.getMonth() + 1, (this.yDate.getDate() + this.SaveUserChoiseDate));
    console.log("currentHebrewDate : " + this.currentHebrewDate.day_in_month_hebrew_letter + " " +this.currentHebrewDate.month_name_hebrew_letter + " " + this.currentHebrewDate.year_hebrew_letter);
    this.callObservable = this.ReqSer.getNotTodayLessons(this.SaveUserChoiseDate).subscribe(data => {
      this.AllLessons = data;
      this.yyOneLesson = data[0];
      this.getSrcAudio = this.yyOneLesson['fullUrl'];

      this.AllLessons.forEach(elm => {
        switch (elm['sug']) {
          case 't':
            elm['sug'] = "תניא";
            break;
          case 'y':
              elm['sug'] = "יום יום";
              break;
          case 'c':
                elm['sug'] = "חומש";
            break;
          case 'p':
            elm['sug'] = "תהילים";
            break;
          case 'r':
          case 'r1':
            elm['sug'] = 'רמב"ם פרק אחד';
            break;
          case 'r3':
            elm['sug'] = 'רמב"ם שלשה פרקים';
            break;
          default:
            elm['sug'] =" ";
            break;
        }
      });
    });
  }
}