import { Component, OnInit } from '@angular/core';
import {CallToMidrasha} from '../service/call-to-midrasha.service';
import{lessonsClass} from '../classes/lessonsClass';

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
  public Lessons:any;

  constructor(private lessonsService: CallToMidrasha){}
  ngOnInit()
  {
    this.callObservable = this.lessonsService.getAllLessons().subscribe(data=>{
      this.AllLessons = data;
      for (let index = 0; index < this.AllLessons.length; index++) {
        this.LessonName.push(this.AllLessons[index]['title']);
        this.LessonUrl.push(this.AllLessons[index]['link']);
      }
      this.AllLessonsJson.LessonName1.concat(this.LessonName);
      this.AllLessonsJson.LessonUrl1.concat(this.LessonUrl);
      console.log(this.AllLessonsJson.LessonName1 + "AllLessonsJson" );
      /*this.AllLessons.forEach(Obj => {
        //console.log(Obj['title'] + " - Obj['title']");
        this.LessonName.push(Obj['title']);
        this.LessonUrl.push(Obj['link']);
        console.log(this.LessonName + " - this.LessonName");
      });*/
    });
    /*this.lessonType = Object.keys(this.AllLessons);
      this.LessonUrl = Object.values(this.AllLessons);
      console.log(this.lessonType + " this.lessonType" );
      console.log(this.LessonUrl + " this.LessonUrl yosef" );
    */ 
  }

  onKey(event: any){
    this.nameToReq = event.target.value.toUpperCase();
    this.getLessons(this.nameToReq);
  }

  getLessons(nameToSearch:string){
    console.log(nameToSearch + " name To Search ")
    this.lessonsService.getLessonsSpecific(nameToSearch)
      .subscribe(
        (response: string) => {
           console.log(response);
           this.Lessons = response;
       },
       (error) => console.log(error)
    );
  }

  /*function that created new audio tag in this position
  CreateAudioTag(currentElm, link){
    const str = "<audio  controls name='media'>" +
    "<source src={{lesson1['audio']}} type='audio/mp3'>" +
"</audio>";
    const chatchElm = currentElm.target.innerHTML(str);
    
  }*/

  ngOnDestroy(){
    this.callObservable.Runsubscribe();
  }

}
