import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-brabcrumbs',
  templateUrl: './brabcrumbs.component.html',
  styles: []
})
export class BrabcrumbsComponent implements OnInit {

   titulo:string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute();
  }

  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(
      
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data)
    ).
    subscribe( event => {
      this.titulo = event.titulo;
      this.title.setTitle(this.titulo+ "- Bubuk");
      const metatag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag(metatag);
    })
  }
}
