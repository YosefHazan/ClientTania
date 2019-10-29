import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midrasha',
  templateUrl: './midrasha.component.html',
  styleUrls: ['./midrasha.component.css']
})
export class MidrashaComponent implements OnInit {

  country:string;
  name:string;
  allCountry:any;
  allCountryKeys:string[];
  allCountryVal:string[];

  constructor(private cuntryService: CallToServerService){}
  
  ngOnInit(){
    this.cuntryService.getAllCountry().subscribe(data=>{
    this.allCountry = data
    this.allCountryKeys = Object.keys(this.allCountry);
    console.log(this.allCountryKeys + " this.allCountryKeys" );
    })
  }

  onKey(event: any){
    this.name = event.target.value.toUpperCase();
    this.getCountrys(this.name);
  }

  getCountrys(name1:string){
    console.log(name1 + " name1 ")
    this.cuntryService.getCountrySpecific(name1)
      .subscribe(
        (response: string) => {
           console.log(response);
           this.country = response;
       },
       (error) => console.log(error)
    );
  }

}
