import { Component, ViewEncapsulation, Input, Output} from '@angular/core';
//import { Router } from '@angular/router';
//import { BuyLecturesComponent} from './com/buy-lectures/buy-lectures.component';
//import { BuyBooksComponent} from './com/buy-Books/buy-Books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public yyRouterbuyBooks:boolean = false;
  public yyRouterbuyLectures:boolean = false;
  public yyTypeLessonsActived:string;
  constructor(){}
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
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'block';
  
    //fix position of sells description
    elmToDown = document.querySelector('.yyRightDirection');
    elmToDown.style.marginTop = "0px";
  }
  fixCssForSells()
  {
    let elmToHide;
    var elmToDown;
    var pixelsToDown;

    //hide element in background
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'none';
    
    //fix position of sells description
    elmToDown = document.querySelector('.yyRightDirection');
    if(screen.width <= 600 && this.yyTypeLessonsActived.includes("chitat"))
    {
      pixelsToDown = "378px";
    }
    else if(screen.width <= 600 && this.yyTypeLessonsActived.includes("midrasha"))
    {
      pixelsToDown = "598px";
    }
    elmToDown.style.marginTop = pixelsToDown;
  }
}