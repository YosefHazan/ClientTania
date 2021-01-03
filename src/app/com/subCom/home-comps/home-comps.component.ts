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
  
  constructor(private ReqSer: CallToChitatService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();

    console.log("ngOnInit comp - chitat");
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
            //TODO: put before "()" -> <br>
            break;
          case 'p':
            elm['sug'] = "תהילים";
            //TODO: put before "פרק" -> <br>
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
}
