import { Component, OnInit } from '@angular/core';
import { CallToMidrashaService } from '../../service/call-to-midrasha.service';
import { minLessons } from '../../classes/minLessons';
import { ManageCookiesService }from '../../service/manage-cookies.service';
import { Router } from '@angular/router';
import { CallToChitatService } from '../../service/call-to-chitat.service';


//@ViewChild('one', { static: false }) d1: ElementRef;

@Component({
  selector: 'app-midrasha',
  templateUrl: './midrasha.component.html',
  styleUrls: ['./midrasha.component.css']
})

export class MidrashaComponent implements OnInit {

  public callObservable:any;
  public AllLessons:any;
  public nameToReq:any;
  public Lessons:boolean;
  public result:minLessons[] = [];
  private glObj:minLessons;
  //private d1:ElementRef;
  
  constructor(private lessonsService: CallToMidrashaService,  private router:Router, private yyMCS:ManageCookiesService) {}//private renderer:Renderer2
  /*
  ngAfterViewInit() {
    const d2 = this.renderer.createElement('div');
    const text = this.renderer.createText('two');
    this.renderer.appendChild(d2, text);
    this.renderer.appendChild(this.d1.nativeElement, d2);
  }*/

  ngOnInit()
  {
    //get all lessons exist in midrasha
      this.callObservable = this.lessonsService.getAllLessons().subscribe(data=>{
      this.AllLessons = data;
      console.log("data");
    });
  }
  
  onKey(event: any){
    this.nameToReq = event.target.value;
    this.Lessons = this.getLessons(this.nameToReq);
  }

  getLessons(name1:string):boolean{
    let isHaveResult;
    console.log(name1 + " name1 " + this.AllLessons[1]);
    
    //get list of all currect result
    this.AllLessons.forEach(element => {
      console.log(element['title'] + " " + name1 + " + " + element['title'].startsWith(name1));
      if(element['title'].startsWith(name1) && (name1 != "") && (name1 != " ")){
        isHaveResult = true;

        this.glObj = {
          Name:element['title'],
          Url:element['link'],
          Type:element['type']
        }
        
        console.log(this.glObj.Url +" : "+element['title']);
        this.result.push(this.glObj);
      }
      else{
        isHaveResult = false;
      }
    });
      return isHaveResult; 
  }
  
  ngOnDestroy(){
    this.callObservable.unsubscribe();
  }
  goToChitat()
  {
    this.router.navigateByUrl('chitat');
  }
  yySaveInCookie(thisLess: minLessons) {
    this.yyMCS.yySetSpecificMidrasha(thisLess)
  }
}
