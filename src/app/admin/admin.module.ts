import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';

import { ClarityModule } from 'clarity-angular';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ProcessPageComponent } from './process-page/process-page.component';
import { AttendancesPageComponent } from './attendances-page/attendances-page.component';
import { ImportPageComponent } from './import-page/import-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { PositionPageComponent } from './position-page/position-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    MainPageComponent,
    EmployeePageComponent,
    ProcessPageComponent,
    AttendancesPageComponent,
    ImportPageComponent,
    InitialPageComponent,
    DepartmentPageComponent,
    PositionPageComponent
  ]
})
export class AdminModule { }
