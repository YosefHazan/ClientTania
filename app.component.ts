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
    //in first time books and lacture is equal to false
    //and they are showing together
    //so i check if is first time then set only one in showing
    if(this.RouterbuyLectures != this.RouterbuyBooks)
    {
      this.RouterbuyLectures = !this.RouterbuyLectures;
    }
    this.RouterbuyBooks = !this.RouterbuyBooks;
  }
  ManualRouterToLectures()
  {
    if(this.RouterbuyLectures != this.RouterbuyBooks)
    {
      this.RouterbuyLectures = !this.RouterbuyLectures;
    }
    this.RouterbuyBooks = !this.RouterbuyBooks;
  }
  TurenOffLectureOrBook()
  {
    console.log("turn off");
    this.RouterbuyBooks = false;
    this.RouterbuyLectures = false;
  }
}