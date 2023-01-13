import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ]
  constructor() { }

  public foodList(){
    return this.list;
  }
}
