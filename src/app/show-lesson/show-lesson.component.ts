import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';
import {CallToServerService} from '../service/get-src.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-lesson',
  templateUrl: './show-lesson.component.html',
  styleUrls: ['./show-lesson.component.css']
})
export class ShowLessonComponent implements OnInit {
  public callObservable:any;
  public AllLessons:any;
  public LessonUrl:any[];
  public lessonType:any[];
  constructor(private ReqSer:CallToServerService, private router:Router ) { }

  ngOnInit() {

        document.getElementById('showDate').innerHTML=(new HeDate).toString();

    console.log("ngOnInit comp - show-lesson");
      this.callObservable = this.ReqSer.getTodayLessons().subscribe(data=>{
      this.AllLessons = data;
      
      this.AllLessons.forEach(elm => {
        if(elm['sug'] == 't'){
          elm['sug'] = "תניא";
        }
        else if(elm['sug'] == 'y'){
          elm['sug'] = "יום יום";
        }
        else if(elm['sug'] == 'c'){
          elm['sug'] = "חומש";
        }
        else if(elm['sug'] == 'p'){
          elm['sug'] = "";
        }
      });
      /*this.lessonType = Object.keys(this.AllLessons);
      this.LessonUrl = Object.values(this.AllLessons);
      console.log(this.lessonType + " this.lessonType" );
      console.log(this.LessonUrl + " this.LessonUrl yosef" );*/
      })
  }

  goToMidrshae()
  {
    this.router.navigateByUrl('midrasha');
  }

  ngOnDestroy(){
    this.callObservable.Runsubscribe();
  }

}
