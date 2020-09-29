import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidenavVisible = true;

  componentToLoad = '';
  constructor() { 
    this.sidenavVisible = true;
  }

  ngOnInit(): void {
    this.sidenavVisible = true;
    this.componentToLoad = 'project';
  }

  toggleSidenav(e){
    this.sidenavVisible = !this.sidenavVisible;
  }
  changeSelection(e){
    this.componentToLoad = e;
  }
}
