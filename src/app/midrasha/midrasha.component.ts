import { Component, OnInit } from '@angular/core';
import {CallToMidrasha} from '../service/call-to-midrasha.service';
import{lessonsClass} from '../classes/lessonsClass';
import{lessonsClass1} from '../classes/lessonsClass1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-midrasha',
  templateUrl: './midrasha.component.html',
  styleUrls: ['./midrasha.component.css']
})
export class MidrashaComponent implements OnInit {

  public callObservable:any;
  public AllLessons:any;
  public LessonUrl:Array<object> = [];
  public LessonName:Array<object> = [];
  public AllLessonsJson:lessonsClass;
  public nameToReq:any;
  public Lessons:lessonsClass;
  private result:lessonsClass;
  public resultLessonName1:string[];
  public resultLessonUrl1:string[];
  constructor(private lessonsService: CallToMidrasha,  private router:Router){}
  ngOnInit()
  {
      this.callObservable = this.lessonsService.getAllLessons().subscribe(data=>{
      this.AllLessons = data;
      console.log("1");//this.AllLessons.LessonName1['title']
      this.AllLessons.forEach(element => {
      this.LessonName.push(element['title']);
      this.LessonUrl.push(element['link']);
    });
    this.AllLessonsJson.LessonName1.push(this.LessonName);
    this.AllLessonsJson.LessonUrl1.push(this.LessonUrl);
    //console.log(this.AllLessonsJson.LessonName1 + "AllLessonsJson" );
    });
  }
  /*
  onKey(event: any){
    this.nameToReq = event.target.value;
    this.Lessons = this.getLessons(this.nameToReq);
  }

  getLessons(name1:string):lessonsClass1{
    let isHaveResult = false;
    console.log(name1 + " name1 " + this.AllLessons[1]);
    //console.log(this.AllLessons);
    //console.log(this.AllLessons[1]['title']);

    this.AllLessons.forEach(element => {
      console.log(element['title'] + " " + name1 + " + " + element['title'].startsWith(name1));
      if(element['title'].startsWith(name1)){
        isHaveResult = true;
        this.resultLessonName1.push(element['title']);
        this.resultLessonUrl1.push(element['link']);
      }
    });
      return isHaveResult ? this.result : null ;  
 
  }
  */
  ngOnDestroy(){
    this.callObservable.unsubscribe();
  }

}
