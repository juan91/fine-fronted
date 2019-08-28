import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/config/config';
import { resolve } from 'url';
import { reject } from 'q';
import { HttheadersService } from '../httheaders.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  URL_API:string = URL_API;

  constructor(private http: HttpClient, private headers:HttheadersService) {}

  //categorias

  createCategory(data:any){

    return new Promise ((resolve,reject) => {
      
      this.http.post(this.URL_API+"/category",data, this.headers.gethttpheaders()).subscribe((result) => {
      
          console.log(result);
          resolve(result);
      }, err =>{
          console.log(err);
          
      });
        
    });
    
  }





}
