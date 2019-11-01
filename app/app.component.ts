import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleToday = 'שיעורי החת"ת';
  titleMidrasha = "המדרשה הדיגיטלית"; 
  constructor(private router:Router){}
}
