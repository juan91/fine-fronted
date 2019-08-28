import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { appRouting } from './app.routes';

//modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
