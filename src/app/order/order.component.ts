import { Component, OnInit, Output  , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderName = "";
  shipName = "";
  Area = "560032";

  Areas = [
  {Code:560034,Name:"HSR"},
  {Code:560033,Name:"SilkBoard"},
  {Code:560032,Name:"BTM"}]


  @Output() postOrderDetails = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  
  }

  evtSubmit(){
    // console.log(this.orderName);
    // console.log(this.shipName);
    // console.log(this.Area);


    // array i.e. filter

    let Name = this.Areas.filter(x=>x.Code == Number(this.Area))[0].Name;


    let objOrderDetails = {
       "OrderName" : this.orderName,
       "ShipName" : this.shipName,
       "Area" : Name
    }
   console.log("from orderdetailscomponent" , objOrderDetails) ;
   this.postOrderDetails.emit(objOrderDetails)


  }






}
