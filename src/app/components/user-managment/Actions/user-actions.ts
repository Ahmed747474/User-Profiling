import { Action } from '@ngrx/store';
import { ApiResult, UserModel } from '../../../model/user.model';
  
 
export enum UserActionType {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILED = 'GET_USERS_FAILED'
}
 
export class GetUsers implements Action {
  readonly type = UserActionType.GET_USERS;
}
 
export class GetUserSuccess implements Action {
  readonly type = UserActionType.GET_USERS_SUCCESS;
  constructor(public payload: ApiResult) { }
}
 
export class GetUserFailed implements Action {
  readonly type = UserActionType.GET_USERS_FAILED;
  constructor(public payload: string) { }
}
 
export type UserActions = GetUsers |
  GetUserSuccess |
  GetUserFailed;
