import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class LoginGuardGuard implements CanActivate {
  constructor(public router: Router, private authservice: AuthService) {}

  canActivate() {
    
    if (this.authservice.isLogin()) {
      return true;
    }
   
    this.router.navigate(["/login"]);
    return false;
  }
}
