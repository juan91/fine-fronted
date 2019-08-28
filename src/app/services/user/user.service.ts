import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_API } from "src/app/config/config";
import { HttheadersService } from "../httheaders.service";
import { map } from "rxjs/operators";
import { resolve } from 'q';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: "root"
})
export class UserService {
  url = URL_API;

  constructor(public http: HttpClient, public headers: HttheadersService, private authserrvice:AuthService) {}

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  createUser(user: UserModel) {
    return this.http.post(this.url + "/register", user, {
      headers: this.httpHeaders
    });
  }

  getprofile() {
    return new Promise(resolve => {
      this.http
        .get(this.url + "/profile/profileuser", this.headers.gethttpheaders())
        .subscribe( data => {
            resolve(data);
          },
          err => {        
            if (err.status === 401) {
              this.authserrvice.logout();  
            }
            resolve({ error: err });
          });
    });
  }

  changePassword(data:any){
  
    return new Promise(resolve => {

      this.http.post(this.url+ "/profile/changepassword",data, this.headers.gethttpheaders())
      .subscribe((resp:any) => {

        console.log(resp);        
        resolve(resp)
      }, err => {
        
        if (err.status === 401) {
          this.authserrvice.logout();  
         }
         resolve({ error: err });
      });

    });

  }
}
