import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
   @Input() public title: string = 'Title Component';
   constructor() {}
   ngOnInit(): void {
     
   }
   ngOnChanges(changes: SimpleChanges): void {
     console.log('foi alterado com sucesso')
   }
   ngOnDestroy(): void {
     console.log('Deu bom, component destruido')
   }

}
