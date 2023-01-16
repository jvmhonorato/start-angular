import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/modules/food-list';

//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent  implements OnInit {

  public foodList: FoodList | any = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    )

   //alert
   this.foodListService.emitEvent.subscribe(res => alert(`Olha você add => ${res}`));
  }
}
