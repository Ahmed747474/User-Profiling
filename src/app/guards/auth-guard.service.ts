import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
 import { AuthService } from "../service/auth.service";
import { AlertifyService } from "../shared/service/alertify.service";

 
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

constructor(private authService: AuthService, private router: Router, private alert: AlertifyService) { }
canActivate(): boolean {
   if (!this.authService.loggedIn()) {
   this.authService.logout();
   this.alert.error('You Sall Not Path !');
   this.router.navigate(['/login']);  
  return false;
}
return true;

}
}
