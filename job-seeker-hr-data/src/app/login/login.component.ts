// Core Module and Services
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Extenal Module and Services


// Import service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  onLogin() {
    const email: string = this.login.value.email;
    const password: string = this.login.value.password;
    const encodedPassword = window.btoa(password);
    // Remove pass this when you already decode from create HR component
    if(email && encodedPassword) {
      this.auth.checkLogin(email, encodedPassword).subscribe(data => {
        console.log(data);
      });
    }
  }

}
