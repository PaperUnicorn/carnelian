import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() selectedComponent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.changeSelection('project');
  }

  changeSelection(selected){
    this.selectedComponent.emit(selected);
  }

}
