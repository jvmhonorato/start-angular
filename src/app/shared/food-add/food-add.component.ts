import { FoodList } from 'src/app/modules/food-list';

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
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res:any) => this.foodListService.foodListAlert(res),
      error:(error) => console.log(error)
    })}

}
