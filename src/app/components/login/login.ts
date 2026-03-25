import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [FormsModule], // only need imports used by html file
  templateUrl: './login.html'
})
export class Login {
  username: string | undefined;
  password: string | undefined;
  apiResponse: any;
  message: string = 'Please enter your credentials'; // default message above form
  messageClass: string = 'alert alert-info';

  // constructor w/dependencies
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) { }

  login() {
    // valid inputs, create user object then pass to auth service to send to server api
    const user = {
      username: this.username,
      password: this.password
    };

    return this.authService.login(user).subscribe({
      next: response => {
        this.apiResponse = response;
        console.log(response);
        this.message = 'Login Successful';
        this.messageClass = 'alert alert-sucess'; // change message bg => green
        this.cdr.detectChanges();
      },
      error: error => {
        this.message = 'Invalid Login';
        this.messageClass = 'alert alert-danger'; // change message bg => red
        this.cdr.detectChanges();
      }
    })
  }
}