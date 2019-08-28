import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SharedService,
  SidebarService,
  UserService,
  AuthService,
  RegisterService,
  LoginGuardGuard,
  HttheadersService
 } from "./services.index";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers:[
    SharedService,
    SidebarService,
    UserService,
    AuthService,
    RegisterService,
    LoginGuardGuard,
    HttheadersService
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
