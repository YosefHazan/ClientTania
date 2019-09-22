import { Component, OnInit } from '@angular/core';
import {CallToServerService} from '../service/get-src.service';
//import { Sub } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  public userPressDate:any = 'today';
  myReq:any;
  constructor(private ReqSer:CallToServerService  ) { }

  ngOnInit() {
    
  }
  
  public resend( value:string){
    console.log("resend up");
     this.myReq = this.ReqSer.getTodayLessons().subscribe(value=>{});
     console.log("resend down");
  }

  ngOnDestroy(){
    this.myReq.unsubscribe();
  }
}
