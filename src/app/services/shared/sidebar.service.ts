import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { reject, resolve } from "q";
import { URL_API } from "src/app/config/config";
import { HttheadersService } from "../httheaders.service";

@Injectable()
export class SidebarService {
  
  url: string;

  constructor(private http: HttpClient, public headers: HttheadersService) {
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
            console.log(err);
            resolve({ error: err });
          }
        );
    });
  }
}
