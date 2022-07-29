import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/authModel';
import { AuthHttpService } from '../../services/auth-http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginError: boolean = false;
  loginSuccess: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(user: LoginModel) {
    this.authService.login(user).subscribe(
      data => {
        console.log(data);
        this.loginSuccess = true;
        this.loginError = false;
      },
      error => {
        this.loginError = true;
        this.loginSuccess = false;
      }
    );
  }
}
