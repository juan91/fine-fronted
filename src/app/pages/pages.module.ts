import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from "@angular/forms";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { ProfileComponent } from './profile/profile.component';
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common'; // para if , for etc
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { CategoryitemComponent } from './category/categoryitem/categoryitem.component';
import { FocusModule } from 'angular2-focus';



@NgModule({
  
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        ProfileComponent,
        ProductsComponent,
        CategoryComponent,
        CategoryitemComponent        
    ],

    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,    
        SimpleNotificationsModule.forRoot({
            position: ["top", "center"],
        }),
        BrowserAnimationsModule,
        FocusModule.forRoot()
    ]
})

export class PagesModule {}