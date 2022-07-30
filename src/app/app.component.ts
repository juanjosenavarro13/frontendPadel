import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logeado: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.token$.subscribe(token => {
      if (token.access_token) {
        this.logeado = true;
      } else {
        this.logeado = false;
      }
    });
  }
  title = 'frontendPadel';
}
