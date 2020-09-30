import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../service/project.service';

@Component({
  selector: 'project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  public projects;

  constructor(
    private projectService : ProjectService
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(){
    this.projectService.getAllProjects().then(
     projects => this.projects = projects 
    )
  }
}
