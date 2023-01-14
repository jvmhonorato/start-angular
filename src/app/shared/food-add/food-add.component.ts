import { ConditionalExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) {}
  public listAddItem(value: string){
    //console.log(value)
    return this.foodListService.foodListAdd(value);
  }

}
