import { CallToTodayMidrashService } from '../../services/call-to-today-midrash.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {minLessons} from '../../classes/minLessons';

@Component({
  selector: 'app-midrasha-yomit',
  templateUrl: './midrasha-yomit.component.html',
  styleUrls: ['./midrasha-yomit.component.css']
})
export class MidrashaYomitComponent implements OnInit {

  public callObservable: any;
  public AllLessons:any;
  constructor(private ReqSer:CallToTodayMidrashService) { }

  ngOnInit() {
    this.callObservable = this.ReqSer.getTodayLessons().subscribe(data => {
      this.AllLessons = data;
      });
  }
  ngOnDestroy() {
    this.callObservable.unsubscribe();
  }
}

