import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AlertifyService } from 'src/app/shared/service/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private autService: AuthService, private alert: AlertifyService, private router: Router) { }
  model: any = {};
  ngOnInit() {
  }
  Login() {
    this.autService.login(this.model).subscribe((x) => {
      this.alert.success('Welcome Back');
    }, error => {
      this.alert.error('incorrect username or password');
    }, () => {
      this.router.navigate(['/user-managment/user-list']);
    }
    );
  }
  loggedIn() {
    return this.autService.loggedIn();
  }

}
