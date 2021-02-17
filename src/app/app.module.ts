import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import { Base_Remote_ApiUrl } from 'src/Config/defaultss.config';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProfileingModule } from './components/profileing/profileing.module';
import { UserManagmentModule } from './components/user-managment/user-managment.module';
 import { ApiUrlInterceptor } from './service/apiurl.interceptor';
import { AuthService } from './service/auth.service';
import { HttpConfigInterceptors } from './service/http.interceptor';
 import { ModalModule } from 'ngx-bootstrap/modal'
 import { FormsModule } from '@angular/forms';
import { UserEditResolver } from './resolver/user-edit.resolver';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { ConfirmationDialogComponent } from './shared/component/confirmationDialog/confirmationDialog.component';
import { HeaderModule } from './shared/component/header/header.module';
import { ConfirmDialogService } from './shared/service/ConfirmDialog.service';
import { AlertifyService } from './shared/service/alertify.service';
import { NgxSpinnerModule } from "ngx-spinner";  
import { FooterComponent } from './shared/component/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileingModule,
    UserManagmentModule,
    HeaderModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    NgbModule,
    FormsModule,
    
     
   ],
  providers: [
    { provide: Base_Remote_ApiUrl, useFactory: getRemoteApiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true, deps: [Base_Remote_ApiUrl] },
    HttpConfigInterceptors,
    AlertifyService,
    AuthService,
     ConfirmDialogService,
     UserEditResolver,
     ],
     entryComponents: [ ConfirmationDialogComponent ],
     exports:[FooterComponent]
,
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getRemoteApiUrl() {
  return environment.baseRemoteApiUrl;
}

