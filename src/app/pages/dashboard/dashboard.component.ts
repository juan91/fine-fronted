import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { 
    document.body.scrollTop = 0;
    console.log("yes");
    
  }

  ngOnInit() {
  }

}
