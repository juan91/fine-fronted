import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttheadersService {

  constructor(public authservice: AuthService) { }

  gethttpheaders(){
    if(!this.authservice.isLogin()){
       this.authservice.logout();
       return;     
    }

    const token = localStorage.getItem('_tokenfine');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: token
      })
    };

    return httpOptions;
  }
}
