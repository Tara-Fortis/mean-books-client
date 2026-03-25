import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {
  username: string | undefined;
  password: string | undefined;
  confirm: string | undefined;
  apiResponse: any;
  message: string = 'Please use a strong password';
  messageClass: string = 'alert alert-info';

  // constructor w/dependencies
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) { }
  
  register() {
    // validate => show error in red
    if (this.password !== this.confirm) {
      this.message = 'Passwords do not match'; // default message above form
      this.messageClass = 'alert alert-danger' // bg blue default
      // update UI
      this.cdr.detectChanges();
      return;
    }

    // valid inputs, create new user object then pass to auth service to send to server api
    const user = {
      username: this.username,
      password: this.password
    };

    return this.authService.register(user).subscribe({
      next: response => {
        this.apiResponse = response;
        console.log(response);
        this.message = 'Registration Successful';
        this.messageClass = 'alert alert-sucess'; // change message bg => green
        this.cdr.detectChanges();
      },
      error: error => {
        this.message = error.error?.error || 'Registration Error';
        this.messageClass = 'alert alert-danger'; // change message bg => red
        this.cdr.detectChanges();
      }
    })
  }
}