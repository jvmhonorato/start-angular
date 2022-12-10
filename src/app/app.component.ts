import { Component, OnInit,DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <app-title *ngIf="drop"></app-title>
  <button (click)='add()'>add</button>
  <button (click)='dropComponent()'>drop</button>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit,DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit, AfterViewChecked  {


  public drop :boolean = true;;
  public valor: number = 1
  constructor() {
   
  }
  public add() :number{
  return this.valor += 1
  }
  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log(' ngDoCheck')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  public dropComponent() {
    this.drop = false;
  }
  
}
