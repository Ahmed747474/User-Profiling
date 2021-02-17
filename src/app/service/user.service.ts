import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResult, UserModel, UserToCreate } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClinte: HttpClient) { }

/**
 * Gets users list from api 
 * 
 */
getUsersList(): Observable<ApiResult> {
 
return this.httpClinte.get<ApiResult>('/api/users').pipe(catchError((error: any) => throwError(error.message)));

}
/**
 * get user details by id 
 * @param id 
 */
getSingleUser(id: number): Observable<UserModel> {
  return this.httpClinte.get<UserModel>(`/api/users/${id}`).pipe(catchError((error: any) => throwError(error.message)));
}

/**
 * update  user information
 * @param id 
 * @param body 
 * @returns  
 */
patchUser(id: number,body: UserModel){
  return this.httpClinte.put(`/api/users/${id}`,{body}).pipe(catchError((error: any) => throwError(error.message)));

}
/**
 * Deletes user by  id 
 * @param id 
 * @returns  
 */
deleteUser(id: number) {
  return this.httpClinte.delete(`/api/users/${id}`).pipe(catchError((error: any) => throwError(error.message)))
}
/**
 * Create new user
 * @param body 
 * @returns  
 */
createUser(body: UserToCreate){
  return this.httpClinte.post<UserToCreate>('/api/users', body).pipe(catchError((error: any) => throwError(error.message)))
}
}

