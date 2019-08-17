import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  recuerdame:boolean = false;
  email:string;
  constructor(private auth: AuthService, private router: Router) { 
    this.user  = new UserModel();
  }
   

  ngOnInit() {
    this.email = localStorage.getItem('email')  || '';
    this.user.username = this.email;
    if(this.email.length > 1){
      this.recuerdame = true;
    }
  }

  login(){
  
    this.auth.login(this.user, this.recuerdame).subscribe(response => this.router.navigate(['/dashboard']));
  }
}
