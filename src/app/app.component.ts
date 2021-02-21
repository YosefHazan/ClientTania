import { Component, Input, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("popCom") elmToDown: ElementRef;
  public pixelsToDown:string;
  public yyRouterbuyBooks:boolean = false;
  public yyRouterbuyLectures:boolean = false;
  public yyTypeLessonsActived:string = "chitat";
  constructor(){
  }
  ngOnInit(){
    //fix position of sells description
    if(screen.width <= 600 && this.yyTypeLessonsActived.includes("chitat"))
    {
      this.pixelsToDown = "378px";
    }
    else if(screen.width <= 600 && this.yyTypeLessonsActived.includes("midrasha"))
    {
      this.pixelsToDown = "598px";
    }
    try{
      this.elmToDown.nativeElement.style.marginTop = this.pixelsToDown;
    }
    catch(e){
      console.log("yoseftryfixcss");
    }
    //this.fixCssForSells();
  }
  yyChitatComponent()
  {
    this.TurenOffLectureOrBook();
    this.yyTypeLessonsActived = 'chitat';
  }
  yyMidrashaComponent()
  {
    this.TurenOffLectureOrBook();
    this.yyTypeLessonsActived = 'midrasha';
  }
  ManualRouterToBooks()
  {
    //in first time books and lacture is equal to false
    //and they are showing together
    //so i check if is first time then set only one in showing
    this.yyRouterbuyLectures = false;
    this.yyRouterbuyBooks = true;
    this.fixCssForSells();
  }
  ManualRouterToLectures()
  {
    this.yyRouterbuyLectures = true;
    this.yyRouterbuyBooks = false;
    this.fixCssForSells();
  }
  TurenOffLectureOrBook()
  {
    var elmToHide;
    var elmToDown;

    console.log("turn off");
    this.yyRouterbuyBooks = false;
    this.yyRouterbuyLectures = false;
    eval("document.querySelector('#descriptionArea').style.display = 'block'");
  
    //fix position of sells description
    elmToDown = document.querySelector('.yyRightDirection');
    elmToDown.style.marginTop = "0px";
  }
  fixCssForSells()
  {
    eval("document.querySelector('#descriptionArea').style.display = 'none'");    
  }
}