import { Component, OnInit } from '@angular/core';
 import { Store } from '@ngrx/store';
 import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
 import { ApiResult } from 'src/app/model/user.model';
 import { UserService } from 'src/app/service/user.service';
import { AlertifyService } from 'src/app/shared/service/alertify.service';
import { ConfirmDialogService } from 'src/app/shared/service/ConfirmDialog.service';
import * as Users from '../Actions/user-actions';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: ApiResult;
  message: string;
   p = 1;
   bsModalRef: BsModalRef;

  constructor(private store: Store<any>,private modalService: BsModalService,private confirmationDialogService: ConfirmDialogService,
    private userService: UserService, private alert: AlertifyService,
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
  this.getUsers();
   
 }
 getUsers(){
  this.SpinnerService.show();  

     this.store.dispatch(new Users.GetUsers());
    this.store.select('users').subscribe((res) => {
       debugger
      this.userList = res.userList;
      if(this.userList){
        this.SpinnerService.hide();  

      }
       setTimeout(() => {
        this.message = '';
      }, 2000);
    },
     error => {
      console.log(error);
    })
 }
 openModalView(id: any): void {
  const initialState = {
    list: id
  };

  this.bsModalRef = this.modalService.show(UserDetailsComponent, {initialState});
  this.bsModalRef.content.closeBtnName = 'Close'; 
}
 
public openConfirmationDialog(id: number) {
  this.confirmationDialogService.confirm('Please confirm', 'Do you really want to Delete This User ?')
  .then((confirmed) => {
    if(confirmed){
      this.userService.deleteUser(id).subscribe(res => {
        this.alert.success('user has been deleted')
      })
    }
   })
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}
 
}
