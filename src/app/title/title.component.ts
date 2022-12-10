import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
   @Input() public title: string = 'Title Component';
   constructor() {}
   ngOnInit(): void {
     
   }
   ngOnChanges(changes: SimpleChanges): void {
     console.log('foi alterado com sucesso')
   }

}
