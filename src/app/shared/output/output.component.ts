import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();
 public list: Array<{nome: string, idade: number}> = [
  {nome:"Victor", idade:32},
  {nome:"Agda", idade:39},
  {nome:"Hanna", idade:9}
]

public getDados(event:number){
    console.log(this.list[event])
 }
}
