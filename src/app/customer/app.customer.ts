import { Component , Input, Output ,EventEmitter,ViewChild, ElementRef, ContentChild , OnChanges, SimpleChanges , 
    OnInit ,DoCheck , AfterViewInit } from '@angular/core';



@Component({
    selector:"app-customer",
    templateUrl:"./app.customer.html",
    styleUrls:["./app.customer.css"]
})
export class Customer implements OnChanges , OnInit , DoCheck , AfterViewInit {
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
    // "John"
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
    @ContentChild("locationName") mylocationName:ElementRef;
    evtPostcustomerDetails1(){
        // this.myCustomerName.nativeElement. // its gives me the textbo
        // this.myCustomerName.nativeElement.value //its gives me the textbox value
        console.log("export the customerIDvalue" , this.myCustomerName.nativeElement.value);
        //console.log("export the customerIDvalue" , customerID.value);
        this.passcustomerDetails.emit(this.myCustomerName.nativeElement.value);
    }

    evtContentDetails(){
        console.log(this.mylocationName.nativeElement.value);
    }


    //  view
    // @contentchild

   // 1 phase
   ngOnChanges(changes: SimpleChanges): void {
    //    let changesValue = changes;
    //    let customerDetails = changesValue.customerDetails;
    //    let currentvalue = customerDetails.currentValue;
    //    let name = currentvalue.Name;

       console.log(console.log("input data from appcomponent" , changes.customerDetails.currentValue.Name)); //John
       if(changes.customerDetails.currentValue.Name  == "Clark"){
           console.log("I do't want clark value. give the another value.");
       }
   }

   //this is loading when my component is loading...
   //component // div
   ngOnInit(): void {
       console.log("ngoninit is calling");
       console.log(this.customerDetails);
       //console.log("export the customerIDvalue" , this.myCustomerName.nativeElement.value);
   }

   ngAfterContentInit(){
       console.log("ngAFterContentinit loadied");
       console.log(this.mylocationName.nativeElement.value);
   }

   ngAfterContentChecked(){
    console.log("ngaftercontentchecked loadied");
   }

   //view  //witin the div

   ngAfterViewInit(): void {
     console.log("ng afterviewinint loaded" , this.myCustomerName.nativeElement.value);
   }

   ngAfterViewChecked(){
    console.log("ngafterviewchecked loaded");
   }
   ngDestroy(){ 
     console.log("component unloaded");
   }




   ngDoCheck(): void {
       console.log("fired");
   }
   

   caling(){

   }








}
