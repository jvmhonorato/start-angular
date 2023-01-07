import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-data-binding></app-data-binding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
    <h1>Header</h1>
    <h3>Footer</h3>
  </app-diretivas-atributos>
  <app-new-component></app-new-component>
  <app-input [contador]= "addValue"></app-input>
  <button (click)="add()">Add</button>
  <button (click)="remove()">Remove</button>
  <router-outlet></router-outlet>`

})
export class AppComponent implements OnInit  {

  public addValue: number = 0

  constructor() {

  }
  ngOnInit(): void {

  }
  public add() {
    this.addValue = this.addValue + 1
  }
  public remove() {
    this.addValue -= 1
  }

}
