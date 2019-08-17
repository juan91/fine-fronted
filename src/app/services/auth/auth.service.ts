import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URL_API } from "src/app/config/config";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

  private httpHeaders = new HttpHeaders({ "Content-type": "application/json" });

  isLogin() {
    let token = localStorage.getItem("_tokenfine");
    return token && token.length > 5 ? true : false;
  }

  login(user, recuerdame) {
    if (recuerdame) {
      localStorage.setItem("email", user.username);
    } else {
      localStorage.removeItem("email");
    }

    return this.http
      .post(URL_API + "/auth/login", user, { headers: this.httpHeaders })
      .pipe(
        map((resp: any) => {
          console.log("**");
          localStorage.setItem("_tokenfine", resp.token);
          return true;
        })
      );
  }

  logout() {
    if (localStorage.getItem("_tokenfine")) {
      localStorage.removeItem("_tokenfine");
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
