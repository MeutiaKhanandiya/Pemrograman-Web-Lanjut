import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  login(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/friends']);
        else  
          this.invalidLogin = true; 
      });
  }
}