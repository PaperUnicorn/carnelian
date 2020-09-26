import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule
  ]
})
export class UserModule { }
