import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 list: string ;
 user: UserModel;
  constructor(public bsModalRef: BsModalRef, private userService: UserService,private SpinnerService: NgxSpinnerService) {}
 

  ngOnInit() {
    this.getUser();
  }
  
getUser(){
  this.SpinnerService.show();
  this.userService.getSingleUser(+this.list).subscribe((res:any) => {
    this.user = res['data']
    if(res['data'] !== undefined || null){
      this.SpinnerService.hide();
    }

   })
}
}
