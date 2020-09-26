import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sidenavVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav(e){
    e.preventDefault;
    this.sidenavVisible = !this.sidenavVisible;
    console.log(this.sidenavVisible);
  }
}
