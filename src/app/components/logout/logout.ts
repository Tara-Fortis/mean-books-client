import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { OnInit } from '@angular/core'; // log user out on startup
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit {

  // dependencies
  constructor(private authService: AuthService, private router: Router) { }

  // method that runs as soon as component instantiates
  ngOnInit(): void {
    // call service to log user out
    this.authService.logout().subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
