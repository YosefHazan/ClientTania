import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { CallToMidrashaService } from '../../services/call-to-midrasha.service';
import { minLessons } from '../../classes/minLessons';
import { GetAllCategoryLessonService } from '../../services/get-all-category-lesson.service';

@Component({
  selector: 'app-midrasha',
  templateUrl: './example-midrasha.component.html',
  styleUrls: ['./example-midrasha.component.css']
})

export class ExampleMidrashaComponent implements OnInit {
  public yyIsTuchHere:boolean[] = [];
  public callObservable: any;
  public AllLessons: any;
  public yyaudio:HTMLAudioElement;
  public getSrcAudio:string = "//tanyayomi.com/%D7%A4%D7%A8%D7%A9%D7%AA%20%D7%90%D7%97%D7%A8%D7%99%20%D7%9E%D7%95%D7%AA-%D7%A7%D7%93%D7%95%D7%A9%D7%99%D7%9D%20-%20%D7%902291.m4a";
  public SaveUserChoiseDate:number = 0;

  constructor(private yytHtmlElm:ElementRef) {}
  /*
  ngAfterViewInit() {
    const d2 = this.renderer.createElement('div');
    const text = this.renderer.createText('two');
    this.renderer.appendChild(d2, text);
    this.renderer.appendChild(this.d1.nativeElement, d2);
  }*/
  
  /*TODO:https://stackoverflow.com/questions/41609937/how-to-bind-event-listener-for-rendered-elements-in-angular-2*/
  playMidrasha(){
    console.log("playMidrasha");
    //this.elRef.nativeElement.querySelector('div');
    this.yytHtmlElm.nativeElement.querySelector("#tableParasha").style.display = 'none';
    this.yytHtmlElm.nativeElement.querySelector("#descriptionLesson").style.display = 'block';
    //
  }
  toggleDisplay(){
    //remuve old rowClicked
    if(document.querySelector(".activRow"))
    { 
      document.querySelector(".activRow").classList.remove("activRow");
    }
    document.querySelector("#" + 'id1').parentElement.classList.add("activRow");
  }
  ngOnInit()
  {
  }
  /*
  onKey(event: any){
    this.nameToReq = event.target.value;
    this.Lessons = this.getLessons(this.nameToReq);
  }
  */
  
  ngOnDestroy(){
  }
}