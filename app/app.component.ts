import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleToday:string = 'חת"ת יומי';
  titleMidrasha:string = "מדרשה דיגיטלית"; 
  UserSelectedTab:string;
  constructor(private router:Router){}

  switchTab(selectedTab:string)
  {
    this.UserSelectedTab = selectedTab;
  }
}
