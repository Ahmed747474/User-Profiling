import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { UserEditResolver } from 'src/app/resolver/user-edit.resolver';
import { UserCreateComponent } from './user-create/user-create.component';
 import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'user-list', component:UserListComponent, canActivate: [AuthGuardService]},
  {path:'user-create', component:UserCreateComponent, canActivate: [AuthGuardService]},

  {path:'user/:id', component:UserEditComponent, canActivate: [AuthGuardService],resolve: {user:UserEditResolver}},

    
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
