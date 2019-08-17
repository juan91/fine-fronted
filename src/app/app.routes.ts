import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent,data: {titulo:"Login"} },
    { path: 'register', component: RegisterComponent,data: {titulo:"Registro"} },
    { path: '**',  component: NopagefoundComponent }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});