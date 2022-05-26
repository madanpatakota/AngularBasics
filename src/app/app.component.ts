

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   isApplyStyle = true; //its come from another area

   subjects = [".net","angular","java"];   //aray of the strings

   //var obj = {ID:1,Name:".net"};

   isShow = false;

   subjects1 = [{ID:1,Name:".net",Location:"bangonore"},{ID:2,Name:"angular"},{ID:3,Name:"java"}]; //array of the objects
   
   customer = {Id:123,Name:"Clark"};

  //  for(int i=0;i<10;i++){

  //  }
   
   constructor(){
   
    // solution 1
    var myArray = [];
    if(this.isApplyStyle == true){
      // iam going to writhe the some logic 
      myArray.push(1);
    }
   else{
      // else relateid code....
      myArray.push(2);
   }

   //ternary opertor
   var myArray2 = [];
   this.isApplyStyle==true ?  myArray2.push(1): myArray2.push(2);


   


  }

  latestCustomerID = "";
  importLatestCustomerDetails($event){
     console.log("importing the customervalue" ,$event)
     this.latestCustomerID  = $event;
  }


}


//=====================================================

// import { Component, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
  
//   Name = "John smith";
//   Address = "India";
//   CustomerID = "cus123"

//   constructor(){
    
//         setTimeout(() => {
//           this.elementType = "checkbox";
//         }, 2000);
//   }

//   getName(){
//     return "from getName method".concat(this.Name);
//   }


//   elementType= "text";

//   evtChangeText(event){
//     console.log("keypress has happend",event);
//   }

//   s:string = "John";
  

//   evtLocation(locationref:HTMLInputElement){
//      console.log(locationref.value);
//   }

// //   evtLocation(locationref:ElementRef){
// //     console.log(locationref.nativeElement);
// //  }


//   evtAddressChange(address){
//      this.Address = address;
//      console.log(address);
//   }


//   // getName(name){

//   // }


// }


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

