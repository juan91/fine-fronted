import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/services.index";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent implements OnInit {
  
  loaddatauser:any = {}

  constructor(public authservice: AuthService) {

    this.loaddatauser  = this.authservice.loaddatauser();

  }

  ngOnInit() {}
  
  logout() {
    this.authservice.logout();
  }
}
