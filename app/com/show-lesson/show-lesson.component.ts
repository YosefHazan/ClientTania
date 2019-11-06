import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallToChitatService } from '../../service/call-to-chitat.service';
import { minLessons } from '../../classes/minLessons';
import { ManageCookiesService} from '../../service/manage-cookies.service';

@Component({
  selector: 'app-show-lesson',
  templateUrl: './show-lesson.component.html',
  styleUrls: ['./show-lesson.component.css']
})
export class ShowLessonComponent implements OnInit {
  public callObservable: any;
  public AllLessons: any;

  constructor(private ReqSer: CallToChitatService, private router: Router, private yyMCS:ManageCookiesService) { }

  ngOnInit() {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();
    if (this.yyMCS.yyIsUserWantCookies()){
      console.log("yosefisWant");
    }

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
  }
  goToMidrshae() {
    this.router.navigateByUrl('midrasha');
  }
  yySaveInCookie(thisLess: minLessons) {
    this.yyMCS.yySetSpecificChitat(thisLess)
  }
  ngOnDestroy() {
    this.callObservable.unsubscribe();
  }

}
