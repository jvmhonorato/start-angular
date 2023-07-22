import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade:number}> = [
    {nome:"Victor Honorato",idade:23},
    {nome:"Agda Honorato",idade:39},
    {nome:"Hanna Honorato",idade:9},
    {nome:"Neide Honorato",idade:65},
    
  ];
  public nome:string = 'Agda'
  constructor() {}

  ngOnInit(): void {

    setInterval( () => {
      if(this.condition){
        this.condition = false
      }else{
        this.condition = true;
      }

    }, 2000)
  }
  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
  }else{
    this.conditionClick = true;
  }
 }
 public onClickAddList() {
  this.list.push({nome:"Nay",idade:20})
 }
 public onClickEventList(event: number) { {
  this.list.splice(event,1)
 }}
}





