import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/services.index';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  recuerdame:boolean = false;
  email:string;
  statussendform:boolean = false;

  constructor(private auth: AuthService, private router: Router) { 
    this.user  = new UserModel();
  }
   

  ngOnInit() {
    this.email = localStorage.getItem('remember')  || '';
    this.user.username = this.email;
    if(this.email.length > 1){
      this.recuerdame = true;
    }

    if(this.auth.isLogin()){
      this.router.navigate(['/dashboard']);
    }
  }

  login(){
    
    this.statussendform = true;
    this.auth.login(this.user, this.recuerdame).subscribe((esponse) =>{
      this.statussendform = false;
      this.router.navigate(['/dashboard'])
    },err => {
  
      if(err.status === 401){
        swal.fire('Error!','Su contraseña o usuario no son correctas','error');
      }
      this.statussendform = false;
    });
  }
}
