import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileingComponent } from './profileing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
   imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule
    
  ],
  exports:[LoginComponent,RegisterComponent],
  declarations: [ProfileingComponent,     RegisterComponent,
    LoginComponent
],
providers:[]
})
export class ProfileingModule { }
