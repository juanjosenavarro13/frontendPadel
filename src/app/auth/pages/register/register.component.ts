import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/authModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerSuccess: boolean = false;
  registerError: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  register(usuario: RegisterModel) {
    console.log(usuario);
  }
}
