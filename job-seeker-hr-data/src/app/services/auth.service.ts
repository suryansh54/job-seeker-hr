import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  checkLogin(email: string, password: string) {
    let hrData: Array<any> = JSON.parse(localStorage.getItem("hr-data"));
    if (hrData != null) {
      const hrFound = hrData.filter(v => {
        return v.email == email;
      });
      const decodedPassword = window.atob(password);
      if(hrFound.length !== 0) {
        if (hrFound[0].email === email && hrFound[0].password === decodedPassword) {
          sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN1cnlhbnNoIFNyaXZhc3RhdmEiLCJpYXQiOjE1MTYyMzkwMjJ9.P4pLbS-3lH6K5Km5TBSFSyUEx6Scr1DwatDSAcrA414')
          this.router.navigateByUrl('/');
          return of('Login Valid');
        } else {
          sessionStorage.removeItem('token');
          return of('Login Invalid');
        }
      } else {
        return of('No user exist');
      }
    }
  }
}
