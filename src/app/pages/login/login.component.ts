import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../Utils/service/users.service";
import {Router} from "@angular/router";
import { ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private toaster: ToastrService,
    private route: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  /**
   * Login key
   */
  loginKey(event) {
    if (event.keyCode === 13) {
      this.usersService.login(this.loginForm.value).subscribe(user => {
          localStorage.setItem('token', user['token']);
          localStorage.setItem('role', user['role']);
          this.route.navigate(['/client/car']);
        },
        error => {
          this.toaster.error('Utilisateur invalid');
        })
    }
  }

  /**
   * Login admin
   */
  login() {
    if (this.loginForm.valid) {
      this.usersService.login(this.loginForm.value).subscribe(user => {
          localStorage.setItem('token', user['token']);
          localStorage.setItem('role', user['role']);
          this.route.navigate(['/client/car']);
        },
        error => {
          this.toaster.error('Utilisateur invalid');
        })
    }
  }

}
