import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly authService: AuthService) {}

  isLoggedIn: boolean = false;
  title = 'Angular_advance';

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
