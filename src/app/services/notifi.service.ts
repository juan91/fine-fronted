import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  constructor(private _service: NotificationsService) { }

  onSuccess(titulo:string, message:string){
  
    this._service.success(titulo,message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onError(titulo:string, message:string){
  
    this._service.error(titulo,message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onInfo(titulo:string, message:string){
  
    this._service.info(titulo,message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onWarning(titulo:string, message:string){
  
    this._service.warn(titulo,message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }
}
