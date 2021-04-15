import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { CallToMidrashaService } from '../../services/call-to-midrasha.service';
import { minLessons } from '../../classes/minLessons';
import { GetAllCategoryLessonService } from '../../services/get-all-category-lesson.service';

@Component({
  selector: 'app-midrasha',
  templateUrl: './example-midrasha.component.html',
  styleUrls: ['./example-midrasha.component.css']
})

export class ExampleMidrashaComponent implements OnInit {

  public callObservable:any;
  public TablesName:minLessons[] = [];
  public HelpTablesName:minLessons;
  public AllLessons:any;
  public AllTables:any; 
  public nameToReq:any;
  public Lessons:boolean;
  public result:minLessons[] = [];
  public TablesNameObservable : any;
  private glObj:minLessons;
  
  renderer: any;
  
  constructor(private lessonsService: CallToMidrashaService
              ,private tableService: GetAllCategoryLessonService
              ,private yytHtmlElm:ElementRef) {}
  /*
  ngAfterViewInit() {
    const d2 = this.renderer.createElement('div');
    const text = this.renderer.createText('two');
    this.renderer.appendChild(d2, text);
    this.renderer.appendChild(this.d1.nativeElement, d2);
  }*/
  
  /*TODO:https://stackoverflow.com/questions/41609937/how-to-bind-event-listener-for-rendered-elements-in-angular-2*/
  playMidrasha(){
    console.log("playMidrasha");
    //this.elRef.nativeElement.querySelector('div');
    let chtchTableParasha = this.renderer.selectRootElement("#playMidrasha");
    console.log(chtchTableParasha.length);
  }
  
  ngOnInit()
  {
    let elm;

    this.TablesNameObservable = this.tableService.getCategorysName().subscribe(data => {
      this.AllTables = data;
      if (this.AllTables == ""){console.log("TableEmpty");}
      for (let index = 0; index < this.AllTables.length; index++) {
        elm = this.AllTables[index];
        this.HelpTablesName = new minLessons();
        this.HelpTablesName["Name"] = elm.split(":")[1];
        this.HelpTablesName["Url"] = elm.split(":")[0];
        this.TablesName.push(this.HelpTablesName);
      }
    });
  }
  /*
  onKey(event: any){
    this.nameToReq = event.target.value;
    this.Lessons = this.getLessons(this.nameToReq);
  }
  */
  yyCalToMidrashaByTable(yyid:any, TablesName:string){
      //remuve old rowClicked
      if(document.querySelector(".activRow"))
      { 
        document.querySelector(".activRow").classList.remove("activRow");
      }
      document.querySelector("#" + yyid).parentElement.classList.add("activRow");


   //get all lessons exist in midrasha
    this.callObservable = this.lessonsService.getAllLessons(TablesName).subscribe(data=>{
      this.AllLessons = data;
    });
    if (this.AllLessons == ""){console.log("AllLessons - TableEmpty");}
    //this.callObservable.unsubscribe();
  }

  getLessons(name1:string):boolean{ // this function is for sreach input
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
  getTablesName(){
  
  }
  
  ngOnDestroy(){
    //this.callObservable.unsubscribe();
    this.TablesNameObservable.unsubscribe();
  }
}