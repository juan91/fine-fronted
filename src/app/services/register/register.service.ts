import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/config/config';
import { CompaniaModel } from 'src/app/models/compania.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = URL_API;

  constructor( public http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  createcompania(data:any){
    
   return this.http.post( this.url+"/auth/register" , data ,{headers: this.httpHeaders}); 

  }

  
}
