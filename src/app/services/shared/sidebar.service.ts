import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { reject, resolve } from "q";
import { URL_API } from "src/app/config/config";
import { HttheadersService } from "../httheaders.service";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SidebarService {
  
  url: string;

  constructor(private http: HttpClient, public headers: HttheadersService, public auth:AuthService) {
    this.url = URL_API;
  }

  getmenuallow() {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.url + "/companies/getmodules", this.headers.gethttpheaders())
        .subscribe(
          (resp: any) => {
            resolve(resp);
          },
          err => {
            if(err.status === 401){
              this.auth.logout();
            }
            reject(err);
          }
        );
    });
  }
}
