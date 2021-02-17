import { catchError } from 'rxjs/operators';
 import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
 import { Observable, of } from 'rxjs';
 import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';
import { AlertifyService } from '../shared/service/alertify.service';
 @Injectable()
export class UserEditResolver implements Resolve<UserModel> {
     constructor(private userService: UserService, private rout: Router , private alert: AlertifyService) {
     }
     resolve(route: ActivatedRouteSnapshot ):Observable<UserModel>  {
         return this.userService.getSingleUser(route.params['id']).pipe(
             catchError((err) => {
                 this.alert.error('problem retrive data ') ;
                 this.rout.navigate(['/doctors']);
                 return of(null);
             })
         );
     }
}
