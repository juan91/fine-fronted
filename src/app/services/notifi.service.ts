import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotifiService {

  constructor(private _service: NotificationsService) { }

  onSuccess(message:string){
  
    this._service.success("Muy bien!",message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onError(message:string){
  
    this._service.error("Error!",message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onInfo(message:string){
  
    this._service.info("Información!",message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }

  onWarning(message:string){
  
    this._service.warn("Algo salió mal!",message,{  
      timeOut: 5000,   
      showProgressBar: false,
      pauseOnHover: true,
      clickToClose: false,
      clickIconToClose: true,
    });

  }
}
