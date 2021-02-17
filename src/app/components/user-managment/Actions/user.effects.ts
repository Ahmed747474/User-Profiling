import { Injectable } from '@angular/core';
 import { UserService } from '../../../service/user.service';
 import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiResult, UserModel } from '../../../model/user.model';
import { GetUserFailed, GetUserSuccess, UserActionType } from './user-actions';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  @Effect()
   getUsers$ = this.actions$.pipe(
    ofType(UserActionType.GET_USERS),
    switchMap(() =>
      this.userService.getUsersList().pipe(
        map((users: ApiResult) => new GetUserSuccess(users)),
        catchError(error => of(new GetUserFailed(error)))
      )
    )
  );
}
