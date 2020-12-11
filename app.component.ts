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
  constructor(){}
  ManualRouterToBooks()
  {
    var elmToHide;
    //in first time books and lacture is equal to false
    //and they are showing together
    //so i check if is first time then set only one in showing
    this.RouterbuyLectures = false;
    this.RouterbuyBooks = true;
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'none';
  }
  ManualRouterToLectures()
  {
    var elmToHide;
    this.RouterbuyLectures = true;
    this.RouterbuyBooks = false;
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'none';
  }
  TurenOffLectureOrBook()
  {
    var elmToHide;
    console.log("turn off");
    this.RouterbuyBooks = false;
    this.RouterbuyLectures = false;
    elmToHide = document.querySelector('[yyAttrr="descriptionArea"]');
    elmToHide.style.display = 'block';
  }
}