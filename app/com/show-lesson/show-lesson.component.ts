import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallToChitatService } from '../../service/call-to-chitat.service';

@Component({
  selector: 'app-show-lesson',
  templateUrl: './show-lesson.component.html',
  styleUrls: ['./show-lesson.component.css']
})
export class ShowLessonComponent implements OnInit 
{
  public callObservable:any;
  public AllLessons:any;

  constructor(private ReqSer:CallToChitatService, private router:Router ) { }

  ngOnInit() 
  {
    //document.getElementById('showDate').innerHTML=(new HeDate).toString();

    console.log("ngOnInit comp - show-lesson");
    this.callObservable = this.ReqSer.getTodayLessons().subscribe(data=>
    {
      this.AllLessons = data;

      this.AllLessons.forEach(elm => 
      {
        if(elm['sug'] == 't'){
          elm['sug'] = "תניא";
        }
        else if(elm['sug'] == 'y'){
          elm['sug'] = "יום יום";
        }
        else if(elm['sug'] == 'c'){
          elm['sug'] = "חומש";
        }
        else if(elm['sug'] == 'p'){
          elm['sug'] = "";
        }  
      });
    });
  }
  goToMidrshae()
  {
    this.router.navigateByUrl('midrasha');
  }

  ngOnDestroy(){
    this.callObservable.unsubscribe();
  }

}
