import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public router: Router){}

  canActivate(): boolean{
      if(!sessionStorage.getItem('token')) {
          this.router.navigateByUrl('/login');
          return false;
      } else {
          return true;
      }
      
  }
}
