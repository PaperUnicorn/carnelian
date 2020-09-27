import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';



@NgModule({
  declarations: [ProjectDetailComponent, ProjectSummaryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectSummaryComponent
  ]
})
export class ProjectModule { }
