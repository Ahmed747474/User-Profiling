import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserToCreate } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { AlertifyService } from 'src/app/shared/service/alertify.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user: UserToCreate;
  createUserForm: FormGroup;
  constructor(private userService: UserService,
    private alert: AlertifyService,
    private route: Router,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.createUserForm = this.fb.group({
      name: ['',[Validators.required]],
      job: ['',[Validators.required]]
     })
  }
  createUser() {
    this.userService.createUser(this.user).subscribe((res) => {
      this.alert.success('Create User Success');
      this.route.navigate(['/user-managment/user-list']);
    }, (err) => {
      this.alert.error('sorry, something went wrong');
    })

  }
}
