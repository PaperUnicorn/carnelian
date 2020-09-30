import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectModule } from '../project/project.module';
import { TeamModule } from '../team/team.module';
import { from } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    ProjectModule,
    TeamModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
