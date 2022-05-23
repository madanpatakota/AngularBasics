
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Name = "John smith";
  Address = "India";
  CustomerID = "cus123"

  constructor(){
    
        setTimeout(() => {
          this.elementType = "checkbox";
        }, 2000);
  }

  getName(){
    return "from getName method".concat(this.Name);
  }


  elementType= "text";

  evtChangeText(event){
    console.log("keypress has happend",event);
  }

  s:string = "John";
  

  evtLocation(locationref:HTMLInputElement){
     console.log(locationref.value);
  }

//   evtLocation(locationref:ElementRef){
//     console.log(locationref.nativeElement);
//  }


  evtAddressChange(address){
     this.Address = address;
     console.log(address);
  }


  // getName(name){

  // }


}


// import { Component } from '@angular/core';

// // ctrl k+c
// //  template:"<input type='text' /> {{title}}  <app-customer></app-customer>",
// //   styles:["input{background-color: red;}"]
// @Component({
//   selector: 'app-root',  //id
  
// })
// export class AppComponent {
//   title = 'AngularBasics';
// }

