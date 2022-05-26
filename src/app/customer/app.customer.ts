import { Component , Input, Output ,EventEmitter,ViewChild, ElementRef } from '@angular/core';



@Component({
    selector:"app-customer",
    templateUrl:"./app.customer.html",
    styleUrls:["./app.customer.css"]
})
export class Customer{
    name = "John smith";

    // is available in the Customer..
    // 1. How ?
    // 2. because i have declared the customerDetails in the AppComponent
    // 3. how to access the customerDetails?


    // howyouare shing the data
    //parent to child   @input
    //appcompoennt to customercompoent
//
    //child to parent @Output
    //customer = {Id:123,Name:"Clark"};
    @Input() customerDetails;
    @Output() passcustomerDetails = new EventEmitter<string>();  //event
    //eventemitter  emit(value)

    evtPostcustomerDetails(customerID:HTMLInputElement){
        console.log("export the customerIDvalue" , customerID.value);
        this.passcustomerDetails.emit(customerID.value);
    }

    // ihave created the element ref(customerID textbox) in the typescript code
    // with the help of view child
    @ViewChild("customerName") myCustomerName:ElementRef;
    evtPostcustomerDetails1(){
        // this.myCustomerName.nativeElement. // its gives me the textbo
        // this.myCustomerName.nativeElement.value //its gives me the textbox value
        console.log("export the customerIDvalue" , this.myCustomerName.nativeElement.value);
        //console.log("export the customerIDvalue" , customerID.value);
        this.passcustomerDetails.emit(this.myCustomerName.nativeElement.value);
    }


}
