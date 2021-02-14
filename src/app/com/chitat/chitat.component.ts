import { Component, OnInit, ViewEncapsulation, Input, Output} from '@angular/core';
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
  constructor(private ReqSer: CallToChitatService, private Hdate:HebrewDateService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();
    let yDate = new Date();
    
    console.log("ngOnInit comp - chitat");
    console.log("yosef : " + JSON.stringify(this.Hdate.module(yDate.getFullYear(),yDate.getMonth(), yDate.getDate())));//TODO:Not work!
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