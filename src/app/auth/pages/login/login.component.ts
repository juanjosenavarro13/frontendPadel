import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(user: LoginModel) {
    this.authService.login(user).subscribe(
      data => {
        this.loginSuccess = true;
        this.loginError = false;
        this.authService.setToken(data);
        // this.router.navigate(['/']);
        window.location.reload();
      },
      error => {
        this.loginError = true;
        this.loginSuccess = false;
      }
    );
  }
}
