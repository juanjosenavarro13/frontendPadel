import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from '../../models/authModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerSuccess: boolean = false;
  registerError: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(usuario: RegisterModel) {
    this.authService.register(usuario).subscribe(
      data => {
        this.registerSuccess = true;
        this.registerError = false;
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 3000);
      },
      error => {
        this.registerError = true;
        this.registerSuccess = false;
      }
    );
  }
}
