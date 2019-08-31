import { Component, OnInit } from "@angular/core";
import { SidebarService, AuthService } from "src/app/services/services.index";
import Swal from "sweetalert2";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  modules: any = [];

  constructor(
    public _sidebar: SidebarService,
    public authservice: AuthService
  ) {
    this.getmenuallow();
  }

  ngOnInit() {}

  getmenuallow() {
    this._sidebar.getmenuallow().then(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.modules = resp.modules;
        } else {
          console.log("aqui");

          Swal.fire("Algo salió mal!", "Ingrese nuevamente", "warning");
        }
      },
      err => {
        Swal.fire(
          "Error!",
          "Algo salió mal, ingrese nuevamente o refresque su navegadors",
          "error"
        );
      }
    );
  }
}
