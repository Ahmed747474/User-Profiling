/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [UserService]
    });
  });

   it('should have a list of users', () => {
    const service: UserService = TestBed.get(UserService);
    service.getUsersList().subscribe((user) => {
      console.log(user.data.length)
      expect(user.data.length).toBeGreaterThanOrEqual(1);
     })
    expect(service.getUsersList()).toBeTruthy();
   });
 
   it('should have a post user ', () => {
     const userr = {name: 'ahmed' , job:'frontend'};
    const service: UserService = TestBed.get(UserService);
    service.createUser(userr).subscribe((user: any) => {
       expect(user)
       .toContain("createdAt");
     })
    });

   it('should have a update user data ', () => {
    const userr = {id: 1,first_name: 'ahmed' , last_name:'frontend',email: 'domain@domain.com',avatar: 'any avatar'};
   const service: UserService = TestBed.get(UserService);
   service.patchUser(userr.id,userr).subscribe((user) => {
     console.log(user)
     expect(user).prototype({});
    })
   });

  it('should have a get single user data ', () => {
    const service: UserService = TestBed.get(UserService);
   service.getSingleUser(2).subscribe((user: any) => {
      expect(user.data.length).toBeLessThanOrEqual(1)
    })
   });
});
