import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { AttendancesPageComponent } from './attendances-page/attendances-page.component';
import { ProcessPageComponent } from './process-page/process-page.component';
import { ImportPageComponent } from './import-page/import-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { PositionPageComponent } from './position-page/position-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: MainPageComponent, pathMatch: 'full' },
      { path: 'employees', component: EmployeePageComponent, pathMatch: 'full' },
      { path: 'attendances', component: AttendancesPageComponent, pathMatch: 'full' },
      { path: 'process', component: ProcessPageComponent, pathMatch: 'full' },
      { path: 'import', component: ImportPageComponent, pathMatch: 'full' },
      { path: 'initial', component: InitialPageComponent, pathMatch: 'full' },
      { path: 'department', component: DepartmentPageComponent, pathMatch: 'full' },
      { path: 'position', component: PositionPageComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
