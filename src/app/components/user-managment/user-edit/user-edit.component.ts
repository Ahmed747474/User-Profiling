import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
 import { UserService } from 'src/app/service/user.service';
import { AlertifyService } from 'src/app/shared/service/alertify.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
   user: UserModel = {};
  constructor(private rout: ActivatedRoute,private userService : UserService,
    private alert: AlertifyService , 
    private route: Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.rout.data.subscribe( data => {
      this.user = data['user']['data'];
      });
   }
 

  update(){
    this.userService.patchUser(this.rout.snapshot.params['id'],this.user).subscribe((res) => {
      this.alert.success('User Updated Successfully');
      this.route.navigate(['/user-managment/user-list'])
    }, 
    (err)=>{
      this.alert.error(err)
    }
    )
  }
  back(): void {
    this.location.back();
  }

}
