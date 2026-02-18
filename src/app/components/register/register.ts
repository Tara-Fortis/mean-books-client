import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
})
export class User {
  username: string | undefined;
  password: string | undefined;
  confirm: string | undefined;

  register: User | undefined;
}
