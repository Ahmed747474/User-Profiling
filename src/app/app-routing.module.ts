import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/profileing/login/login.component';
import { RegisterComponent } from './components/profileing/register/register.component';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },

  { path: 'user-managment', loadChildren: () => import('./components/user-managment/user-routing.module')
  .then(mod => mod.UserRoutingModule) },

  {path: '**' , redirectTo: 'user-managment/user-list' , pathMatch: 'full'} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
