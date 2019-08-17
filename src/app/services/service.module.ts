import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SharedService,
  SidebarService,
  UserService,
  AuthService,
  RegisterService,
  LoginGuardGuard
 } from "./services.index";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers:[
    SharedService,
    SidebarService,
    UserService,
    AuthService,
    RegisterService,
    LoginGuardGuard
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
