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

  constructor(private ReqSer: CallToChitatService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();

    console.log("ngOnInit comp - show-lesson");
    this.callObservable = this.ReqSer.getTodayLessons().subscribe(data => {
      this.AllLessons = data;

      console.log(data[4]['sug']);
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
            elm['sug'] = "";
            break;
          case 'r':
          case 'r1':
            elm['sug'] = 'רמב"ם פרק אחד';
            break;
          case 'r3':
            elm['sug'] = 'רמב"ם שלשה פרקים';
            break;

          default:
            break;
        }
      });
    });
  }/*
  goToMidrshae() {
    this.router.navigateByUrl('midrasha');
  }*/
  ngOnDestroy() {
    this.callObservable.unsubscribe();
  }
}