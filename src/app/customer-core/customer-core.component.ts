import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-core',
  templateUrl: './customer-core.component.html',
  styleUrls: ['./customer-core.component.css']
})
export class CustomerCoreComponent {

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
