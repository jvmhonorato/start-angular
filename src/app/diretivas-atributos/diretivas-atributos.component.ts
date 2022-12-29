import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

public valor:boolean = true;
public heigthPx:string = "20px";
public backgroundColor: string = " "

constructor(){}
ngOnInit(): void {
setInterval(() => {
  if(this.valor){
    this.valor = false;
  }else{
    this.valor = true;
  }
  if(this.heigthPx =="20px"){
   this.heigthPx = "50px";
   this.backgroundColor = "blue"
  }else{
    this.heigthPx = "20px"
    this.backgroundColor = "yellow"
  }
},2000)
}


}
