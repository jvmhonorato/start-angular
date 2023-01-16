import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

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


  //GET method
  public foodList():Observable<Array<FoodList>> {
  return this.http.get<Array<FoodList>>(`${this.url}list-food`)
  .pipe(
    res => res,
    error => error
    )
  }
  // public foodListAdd(value: string){
  //   //method alert
  //   this.foodListAlert(value)
  //   //method push object to list
  //  return this.list.push(value)
  // }

  //POST method
  public foodListAdd(value: string): Observable<FoodList>{
  return this.http.post<FoodList>(` ${this.url }list-food`,{nome:value} ).pipe(
    res => res,
    error => error
  )
  }

  //update method
  public foodListEdit(value: string,id: number): Observable<FoodList>{
    return this.http.put<FoodList>(` ${this.url }list-food/${id}`,{nome:value} ).pipe(
      res => res,
      error => error
    )
    }
    //delete
    public foodListDelete(id: number): Observable<FoodList>{
      return this.http.delete<FoodList>(` ${this.url }list-food/${id}` ).pipe(
        res => res,
        error => error
      )
      }



  //method alert
  public foodListAlert(value: string){
    return this.emitEvent.emit(value)
  }

}
