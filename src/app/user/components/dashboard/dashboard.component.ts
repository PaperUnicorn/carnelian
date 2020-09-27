import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidenavVisible = true;
  constructor() { 
    this.sidenavVisible = true;
  }

  ngOnInit(): void {
    this.sidenavVisible = true;
  }

  toggleSidenav(e){
    this.sidenavVisible = !this.sidenavVisible;
  }
}
