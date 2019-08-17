import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from 'src/app/config/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = URL_API;

  constructor( public http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  createUser(user: UserModel){
    
   return this.http.post( this.url+"/register" ,user,{headers: this.httpHeaders}); 

  }
}
