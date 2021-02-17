import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel, UserRegister } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { AlertifyService } from 'src/app/shared/service/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  user: UserRegister = {};

  constructor(private fb: FormBuilder, private authservice: AuthService,
    private routr: Router,
    private alert: AlertifyService) { }

  ngOnInit() {
    this.createForm();
  }
  /**
   * Creates form with form builder
   */
  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
    }, { validator: this.passwordMatches });
  }
  /**
   * Gets password
   */
  get password() { return this.form.get('password'); }


  /**
   * Passwords matches validation
   * @param g 
   * @returns  boolean
   */
  passwordMatches(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  register() {
    if (this.form.valid) {
      this.user = Object.assign({}, this.form.value);
      this.authservice.register(this.user).subscribe(() => {
        this.alert.success('Register Success !');
      },
        (error) => {
          this.alert.error('sorry, something went wrong');
        }, () => {
          this.authservice.login(this.user).subscribe(() => {
            this.routr.navigate(['/user-managment/user-list']);
          })
        }
      );
    }
  }
}
