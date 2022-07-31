import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register(usuario: RegisterModel) {
    this.authService.register(usuario).subscribe(data => {
      console.log(data);
    });
  }
}
