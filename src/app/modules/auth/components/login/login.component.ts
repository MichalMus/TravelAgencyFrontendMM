import { Component } from '@angular/core';
import { UserLoginData } from 'src/app/modules/core/interfaces/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  userData: UserLoginData = {
    username: '',
    password: '',
  };
  onLogin() {
    console.log(this.userData);
  }
}
