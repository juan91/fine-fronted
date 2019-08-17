import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo:'Principal',
      icono:'fas fa-home',
      submenu:[
        {titulo:'Dashboard', url: '/dashboard'},
        {titulo:'Grafica', url: '/grafica1'},
        {titulo:'Dashboard', url: '/dashboard'}
      ]
    },
    {
      titulo:'Almacen',
      icono:'fas fa-box-open',
      submenu:[
        {titulo:'Dashboard', url: '/dashboard'},
        {titulo:'Grafica', url: '/grafica1'},
        {titulo:'Dashboard', url: '/dashboard'}
      ]
    }
  ];

  constructor() { }

}
