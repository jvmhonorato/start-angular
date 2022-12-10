import { Component, OnInit,DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  {{valor}}
  <button (click)='add()'>add</button>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit,DoCheck, AfterContentChecked, AfterContentInit,AfterViewInit, AfterViewChecked  {



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
  
}
