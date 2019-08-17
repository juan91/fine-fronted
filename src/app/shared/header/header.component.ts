import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/services.index";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(public authservice: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authservice.logout();
  }
}
