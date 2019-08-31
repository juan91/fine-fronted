import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { URL_API } from "src/app/config/config";
import { Router } from "@angular/router";
import { UserModel } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {
  }

  private httpHeaders = new HttpHeaders({ "Content-type": "application/json" });

  user = new UserModel();
  dataextralocal: any = {};

  isLogin() {
    let token = localStorage.getItem("_tokenfine");
    return token && token.length > 5 ? true : false;
  }

  login(user: UserModel, recuerdame) {
    if (recuerdame) {
      localStorage.setItem("remember", user.username);
    } else {
      localStorage.removeItem("remember");
    }

    return this.http
      .post(URL_API + "/auth/login", user, { headers: this.httpHeaders })
      .pipe(
        map((resp: any) => {
          localStorage.setItem("_tokenfine", resp.token);
          this.dataextralocal = {
            email: resp.user.email,
            username: resp.user.username,
            role: resp.user.role,
            namecompany: resp.user.namecompany
          };
          localStorage.setItem("data_user", JSON.stringify(this.dataextralocal));
          return true;
        })
      );
  }

  logout() {
    
      localStorage.removeItem("_tokenfine");
      localStorage.removeItem("data_user");
      this.router.navigate(["/login"]);
   
  }

  loaddatauser(){
   let datauser = localStorage.getItem("data_user");
      
    if(!datauser || datauser === null){
      this.logout();
      
    }else{
      return JSON.parse(datauser);
    }
    
  }
  
}
