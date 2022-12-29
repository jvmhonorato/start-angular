import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos></app-diretivas-atributos>
  <router-outlet></router-outlet>`

})
export class AppComponent implements OnInit  {



  constructor() {

  }
  ngOnInit(): void {

  }

}
