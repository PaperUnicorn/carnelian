import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectModule } from '../project/project.module';
import { from } from 'rxjs';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    ProjectModule,
    UserRoutingModule
  ]
})
export class UserModule { }
