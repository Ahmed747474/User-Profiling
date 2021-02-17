import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagmentComponent } from './user-managment.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';
import { usersReducer } from 'src/app/components/user-managment/Actions/reducer';
import { UserEffects } from 'src/app/components/user-managment/Actions/user.effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { NgxSpinnerModule } from "ngx-spinner";  
 export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers = [logger];

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
      StoreModule.forRoot({}),
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffects]),
    FormsModule      ,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [UserManagmentComponent, UserListComponent, UserDetailsComponent,UserEditComponent,UserCreateComponent],
  exports:[UserDetailsComponent , UserEditComponent,UserListComponent,UserCreateComponent],
  entryComponents: [UserDetailsComponent]
})
export class UserManagmentModule { }
