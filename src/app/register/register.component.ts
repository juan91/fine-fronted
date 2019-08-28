import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import swal from "sweetalert2";
import { Router } from "@angular/router";
import { RegisterService } from "../services/services.index";
import { UserModel } from "../models/user.model";
import { CompaniaModel } from "../models/compania.model";
import { AccountModel } from "../models/acoount.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  forma: FormGroup;
  errors: any = [];
  statussendform: boolean;

  compania: CompaniaModel = new CompaniaModel();
  account: AccountModel = new AccountModel();
  user: UserModel = new UserModel();

  errornamecompania: string;
  errorusername: string;
  errorpassword: string;
  erroremail: string;
  btndisabled: boolean = false;

  datasave: any = {};

  constructor(public router: Router, private registerservice: RegisterService) {
    this.statussendform = false;
  }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      let email = group.controls[campo1].value;
      let confirmemail = group.controls[campo2].value;

      if (email === confirmemail) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    this.forma = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        emailconfirm: new FormControl(null, [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl(null, Validators.required)
      },
      {
        validators: this.sonIguales("email", "emailconfirm")
      }
    );
  }

  register() {
    this.statussendform = true;
    this.btndisabled = true;

    this.errornamecompania = "";
    this.errorusername = "";
    this.erroremail = "";
    this.errorpassword = "";

    this.datasave = {
      namecompany: this.compania.name,
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    };
    console.log(this.datasave);

    this.registerservice.createcompania(this.datasave).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          swal.fire(
            "Muy bien!",
            "Te has  registrado con éxito, verifica tu email para activar tu cuenta",
            "success"
          );
          this.router.navigate(["/login"]);
        } else {
          if (resp.errfor) {
            this.errornamecompania = resp.errfor.namecompany
              ? resp.errfor.namecompany
              : "";
            this.errorusername = resp.errfor.username
              ? resp.errfor.username
              : "";
            this.erroremail = resp.errfor.email ? resp.errfor.email : "";
            this.errorpassword = resp.errfor.password
              ? resp.errfor.password
              : "";
          }
        }
        this.statussendform = false;
        this.btndisabled = false;
      },
      err => {
        this.statussendform = false;
        console.log(err);
        if (err.status === 400) {
          this.errors = err.error.errors as string[];
        } else {
          swal.fire(
            "Algo salió mal!",
            "Error al crear cuenta, intente nuevamente",
            "error"
          );
        }

        console.log("codigo error: " + err.status);
        console.error(err.error.errors);
        this.btndisabled = false;
      }
    );
  }
}
