/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListComponent } from './user-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/service/user.service';
import { StoreModule } from '@ngrx/store';
import { ConfirmDialogService } from 'src/app/shared/service/ConfirmDialog.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,StoreModule.forRoot({}),ModalModule.forRoot(),NgxPaginationModule
      ], 
       providers: [BsModalRef,BsModalService,UserService,ConfirmDialogService,NgxSpinnerService],


      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
