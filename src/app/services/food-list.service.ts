import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  //API fake
  private url: string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  // public foodList(){
  //   return this.list;
  // }

  public foodList():Observable {
  return this.http.get(` ${this.url }list-food` )
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
