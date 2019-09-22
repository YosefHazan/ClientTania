import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';
import {CallToServerService} from '../service/get-src.service';


@Component({
  selector: 'app-show-lesson',
  templateUrl: './show-lesson.component.html',
  styleUrls: ['./show-lesson.component.css']
})
export class ShowLessonComponent implements OnInit {
  public yosef:any;
  public AllLessons:any;
  public LessonUrl:any[];
  public lessonType:any[];
  constructor(private ReqSer:CallToServerService ) { }

  ngOnInit() {
    console.log("ngOnInit comp - show-lesson");
      this.yosef = this.ReqSer.getTodayLessons().subscribe(data=>{
      this.AllLessons = data

      this.lessonType = Object.keys(this.AllLessons);
      this.LessonUrl = Object.values(this.AllLessons);
      console.log(this.lessonType + " this.lessonType" );
      console.log(this.LessonUrl + " this.LessonUrl yosef" );
      })
  }

  ngOnDestroy(){
    this.yosef.Runsubscribe();
  }

}
