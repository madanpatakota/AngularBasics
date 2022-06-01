import { Component, Input, OnInit , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit , OnChanges{

  @Input() Orders;   // super importent
   
  //Orders1;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("get the data from the appcompoennt " , this.Orders);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
