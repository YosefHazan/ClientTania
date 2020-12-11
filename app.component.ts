import { Component, ViewEncapsulation, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { BuyLecturesComponent} from './com/buy-lectures/buy-lectures.component';
import {BuyBooksComponent} from './com/buy-Books/buy-Books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public RouterbuyBooks:boolean = false;
  public RouterbuyLectures:boolean = false;
  public TypeLessonsActived:string;
  constructor(){}
  ChitatComponent()
  {
    this.TurenOffLectureOrBook();
    this.TypeLessonsActived = 'chitat';
  }
  MidrashaComponent()
  {
    this.TurenOffLectureOrBook();
    this.TypeLessonsActived = 'midrasha';
  }
  ManualRouterToBooks()
  {
    //in first time books and lacture is equal to false
    //and they are showing together
    //so i check if is first time then set only one in showing
    this.RouterbuyLectures = false;
    this.RouterbuyBooks = true;
    this.fixCssForSells();
  }
  ManualRouterToLectures()
  {
    this.RouterbuyLectures = true;
    this.RouterbuyBooks = false;
    this.fixCssForSells();
  }
  TurenOffLectureOrBook()
  {
    var elmToHide;
    var elmToDown;

    console.log("turn off");
    this.RouterbuyBooks = false;
    this.RouterbuyLectures = false;
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'block';
  
    //fix position of sells description
    elmToDown = document.querySelector('.yyRightDirection');
    elmToDown.style.marginTop = "0px";
  }
  fixCssForSells()
  {
    var elmToHide;
    var elmToDown;
    var pixelsToDown;

    //hide element in background
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'none';
    
    //fix position of sells description
    elmToDown = document.querySelector('.yyRightDirection');
    if(screen.width <= 600 && this.TypeLessonsActived.includes("chitat"))
    {
      pixelsToDown = "378px";
    }
    else if(screen.width <= 600 && this.TypeLessonsActived.includes("midrasha"))
    {
      pixelsToDown = "598px";
    }
    elmToDown.style.marginTop = pixelsToDown;
  }
}