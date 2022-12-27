import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome:string =  "Victor"
  public idade: number = 33
  public checkedDisabled: boolean = false
  public imgTitle:string = "Property Binding"
  public imgSrc:string ="https://st.depositphotos.com/1004061/3547/i/950/depositphotos_35477449-stock-photo-big-lion-lying-on-savannah.jpg"

  public alertInfo() {
    alert("Deu Bom!")
  }
}
