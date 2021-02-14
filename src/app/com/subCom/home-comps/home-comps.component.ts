import { Component, OnInit, ViewEncapsulation, Input, Output} from '@angular/core';
import { CallToChitatService } from '../../../services/call-to-chitat.service';

@Component({
  selector: 'app-home-comps',
  templateUrl: './home-comps.component.html',
  styleUrls: ['./home-comps.component.css']
})
export class HomeCompsComponent implements OnInit {

  public yyIsTuchHere:boolean[] = [];
  public callObservable: any;
  public AllLessons: any;
  public yyOneLesson:any;
  public yyaudio:HTMLAudioElement;
  public getSrcAudio:string;
  public SaveUserChoiseDate:number = 0;
  constructor(private ReqSer: CallToChitatService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();

    this.callObservable = this.ReqSer.getNotTodayLessons(-1).subscribe(data => {
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
