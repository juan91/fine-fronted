import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-categoryitem]',
  templateUrl: './categoryitem.component.html'
})
export class CategoryitemComponent implements OnInit {
  
  
  @Input() item:any = {}
  @Output() canceleditevent = new EventEmitter<any>();
  @Output() editevent = new EventEmitter<any>();
  @Output() deleteevent = new EventEmitter<any>();

  changed:boolean; 
  constructor() { 
    this.changed = false;
  }

  ngOnInit() {
  }

  changedRow(){
    this.changed = true;
  }

  canceledit(){
    this.changed = false;
    this.canceleditevent.emit();
  }

  edit(){
    this.changed = false;  
    this.editevent.emit(this.item);
  }

  delete(item:any){

    Swal.fire({
      title: 'Eliminar categoría',
      text: "¿Está seguro de eliminar: "+item.name+"?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.changed = false;  
        this.deleteevent.emit(this.item);
      }
    })
  
  }

}
