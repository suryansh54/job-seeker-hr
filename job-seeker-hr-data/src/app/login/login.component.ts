import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login: FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  onLogin() {
    if(this.login.value.email == "suryanshsrivastava8791@gmail.com" && this.login.value.password == 'Education54#') {
      sessionStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN1cnlhbnNoIFNyaXZhc3RhdmEiLCJpYXQiOjE1MTYyMzkwMjJ9.P4pLbS-3lH6K5Km5TBSFSyUEx6Scr1DwatDSAcrA414')
      this.router.navigateByUrl('/');
    } else {
      sessionStorage.removeItem('token')
    }
  }

}
