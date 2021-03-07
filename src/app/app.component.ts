import { Component, Input, Output, ElementRef, ViewChild, OnInit, Directive} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ViewChild("popCom") eleToDown: ElementRef;
  public pixelsToDown:string;
  public yyRouterbuyBooks:boolean = false;
  public yyRouterbuyLectures:boolean = false;
  
  constructor(){}
  ngOnInit(){}
  yyChitatComponent()
  {
    this.TurenOffLectureOrBook();
  }
  yyMidrashaComponent()
  {
    this.TurenOffLectureOrBook();
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
    var elmToDown;
    this.yyRouterbuyBooks = false;
    this.yyRouterbuyLectures = false;
    eval("document.querySelector('#descriptionArea').style.display = 'block'");
  
    //fix position of sells description
    elmToDown = document.querySelector('#popCom');
    elmToDown.style.marginTop = "0px";
  }
  fixCssForSells()
  {
    //fix position of sells description
    if(window.screen.width <= 600 && window.location.href.includes("chitat"))
    {
      this.pixelsToDown = "380px";
    }
    else if(window.screen.width <= 600 && window.location.href.includes("midrasha"))
    {
      this.pixelsToDown = "600px";
    }
    else{//pc screen
      this.pixelsToDown = "0px";
    }
    eval("document.querySelector('#popCom').style.marginTop ='" + this.pixelsToDown + "';");
    eval("document.querySelector('#descriptionArea').style.display = 'none'");    
  }

}