import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CallToChitatService } from '../../services/call-to-chitat.service';
import { minLessons } from '../../classes/minLessons';

@Component({
  selector: 'app-chitat',
  templateUrl: './chitat.component.html',
  styleUrls: ['./chitat.component.css'],
//  encapsulation: ViewEncapsulation.None
//encapsulation: ViewEncapsulation.None
})
export class chitatComponent implements OnInit {
  public callObservable: any;
  public AllLessons: any;
  public yyOneLesson:any;
  public yyaudio:HTMLAudioElement;
  
  constructor(private ReqSer: CallToChitatService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();

    console.log("ngOnInit comp - show-lesson");
    this.callObservable = this.ReqSer.getTodayLessons().subscribe(data => {
      this.AllLessons = data;
      this.yyOneLesson = data[0];
      document.getElementById('player').setAttribute( 'src',this.yyOneLesson['audio']);

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
  toggleDisplay(yyindex){
    this.yyOneLesson = yyindex;
    document.getElementById('player').setAttribute( 'src',this.yyOneLesson['audio']);
    console.log(this.yyOneLesson['audio']);
    /*setTimeout(() => {
      let container = document.getElementsByTagName('audio');
      let content = container.innerHTML;
      container.innerHTML= content; 
    }, 100);
  }
  PlayLesson(){
    this.yyaudio.src = this.yyOneLesson['audio'];
    //this.yyaudio.load();
    this.yyaudio.play();
  }
  PouseLesson(){
    this.yyaudio.pause();*/
  }
  
}