import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSummaryComponent } from './team-summary/team-summary.component';



@NgModule({
  declarations: [TeamSummaryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TeamSummaryComponent
  ]
})
export class TeamModule { }
