import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigureComponent } from './configure/configure.component';
import { ProjectallocationComponent } from './projectallocation/projectallocation.component';


@NgModule({
  declarations: [DashboardComponent, ConfigureComponent, ProjectallocationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
