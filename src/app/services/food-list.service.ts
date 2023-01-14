import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ]
  constructor() { }

  public foodList(){
    return this.list;
  }
  public foodListAdd(value: string){
    //method alert
    this.foodListAlert(value)
    //method push object to list
   return this.list.push(value)
  }


  //method alert
  public foodListAlert(value: string){
    return this.emitEvent.emit(value)
  }

}
