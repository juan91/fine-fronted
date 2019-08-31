import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    console.log("ok");
    
    this.editevent.emit(this.item);
  }

}
