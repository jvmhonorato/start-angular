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
  <!-- <app-input [contador]= "addValue"></app-input>
  <button (click)="add()">Add</button>
  <button (click)="remove()">Remove</button> -->

  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <!-- <app-output (enviarDados)="setDados($event)")></app-output> -->
  <router-outlet></router-outlet>
  <app-food-list></app-food-list>

  <app-food-add></app-food-add>
  `

})
export class AppComponent implements OnInit  {

  public destruir : boolean = true;
  public addValue: number = 0
  public getDados: {nome: string, idade:number} | undefined;

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
  public setDados(event:{nome:string, idade:number}) {
    this.getDados = event
  }

}
