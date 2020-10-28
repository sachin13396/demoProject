import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  constructor(private router: Router, private Auth: AuthGuard, private AuthService: AuthService) { }
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl('')
  });

  onLogin() {

    let email = this.loginForm.get('emailAddress').value;
    let password = this.loginForm.get('password').value;
    if (email == 'abc@gmail.com' && password == '12345') {
      this.AuthService.isUserLoggedIn(true);
      this.router.navigate(['/main']);
    }
    else {
      this.AuthService.isUserLoggedIn(false);
      window.alert("Please enter valid details");
    }
  }
}
