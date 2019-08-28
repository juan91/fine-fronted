import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // para if , for etc

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BrabcrumbsComponent } from './brabcrumbs/brabcrumbs.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations:[
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,    
        BrabcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,    
        BrabcrumbsComponent,

    ]
})

export class SharedModule{}