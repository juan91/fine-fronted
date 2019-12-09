import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from 'src/app/services/services.index';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { NotifiService } from 'src/app/services/notifi.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user = new UserModel();
  datachangepass:any = {};
  loading:boolean = false;
  constructor(public authservice: AuthService, public router:Router, private userservice:UserService, private _noti:NotifiService) { 
      // if(!this.authservice.isLogin()){
      //   this.router.navigate(['/login']);
      // }
      this.getProfileUSer();
      
  }

  ngOnInit() {
  }

  getProfileUSer(){

    this.userservice.getprofile().then( (resp:any) => {
  
      this.user = resp.user;
      
    }, err => {
      console.log("quepaso");      
    });

  }

  changePassword(){
    this.loading = true;
    console.log(this.datachangepass);    
    this.userservice.changePassword(this.datachangepass).then((resp:any) => {
      
      if(resp.success){
        this._noti.onSuccess("Contraseña actualizada con éxito");
        this.datachangepass = {};
      }else{
        if(resp.errors){
          this._noti.onWarning(resp.errors[0]);
        }

        if( Object.keys(resp.errfor).length !== 0 ){
          this._noti.onWarning(resp.errfor[0]);
        }
        
      }      
    
      this.loading = false;
    },err => {
      this._noti.onError("error :"+ err);
    })    
  }

}
