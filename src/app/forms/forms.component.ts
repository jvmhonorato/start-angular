import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public listComidas: Array<{comida: string, preco: string}> = [
    {comida:"acaraje", preco:"R$10,00"},
    {comida:"coxinha", preco:"R$11,00"},
    {comida:"pastel", preco:"R$12,00"},
    {comida:"sonho", preco:"R$13,00"},
  ]

  public submitForm(form: NgForm){

   if(form.valid){
    console.log(form.value)
   }
  }
}
