import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {  UserModel, UserRegister } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
constructor(private httpClinte: HttpClient,private router: Router) { }
logged: boolean = false;
loggedIn$ = new BehaviorSubject<boolean>(this.logged);

/**
 * TODO : send user credential to server  
 * Users login
 * @param userData (user name || email & password)
 */
login(model: any = {}) {
  return this.httpClinte.post('/api/login' , model)
  .pipe(
    map((response: any) => {
      const user = response ;
      if ( user) {
      localStorage.setItem('token', user.token);
        }
    })
  );
}
/**
 * TODO: check user if still logged in or no  based on token in localstorage 
 * but this token is now a fake token
 * Logged in
 * 
 * @returns  boolean 
 */
loggedIn() {
   const token = localStorage.getItem('token');
   return (token) ? true : false;
}
/**
 * Sets logged in
 * update login status 
 * @param value 
 */
setLoggedIn(value: boolean) {
  this.loggedIn$.next(value);
  this.logged = value;
}

/**
 * Logouts auth service
 * remove all of user data from localstorage
 */
logout() {
   localStorage.removeItem('token');
    this.setLoggedIn(false);
    this.router.navigate(['/login']);

  }
 
  
  register(user: UserRegister){
    return this.httpClinte.post('/api/register',user);
  }

}
