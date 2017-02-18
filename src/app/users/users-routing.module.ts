import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { ChangepassPageComponent } from './changepass-page/changepass-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent, pathMatch: 'full' },
      { path: 'work', component: WorkPageComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfilePageComponent, pathMatch: 'full' },
      { path: 'changepass', component: ChangepassPageComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule { }
