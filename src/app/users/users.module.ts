import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClarityModule } from 'clarity-angular';
import { AuthModule } from '../auth/auth.module';
import { WorkPageComponent } from './work-page/work-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChangepassPageComponent } from './changepass-page/changepass-page.component';
import { AuthGuard } from '../auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ClarityModule,
    AuthModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    MainPageComponent,
    WorkPageComponent,
    ProfilePageComponent,
    ChangepassPageComponent
  ],
  providers: [UserService, AuthGuard]
})
export class UsersModule { }
